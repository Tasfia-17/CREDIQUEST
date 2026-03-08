// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface ICrediScore {
    function updateSkillScore(address player, uint256 rank, uint256 total) external;
}

contract TournamentArena is ReentrancyGuard, Pausable, Ownable {
    enum TournamentState { Registration, Seeding, InProgress, Finalized, PayoutComplete }
    enum GameType { ReactionTime, Memory, Strategy }

    struct Tournament {
        uint256 entryFee;
        uint256 maxPlayers;
        uint256 startTime;
        GameType gameType;
        TournamentState state;
        uint256 prizePool;
        address[] players;
        mapping(address => bool) hasEntered;
        mapping(uint256 => Match) matches;
        uint256 matchCount;
        address winner;
    }

    struct Match {
        address player1;
        address player2;
        address winner;
        uint256 player1Score;
        uint256 player2Score;
        bool isComplete;
    }

    uint256 public tournamentCounter;
    mapping(uint256 => Tournament) public tournaments;
    
    ICrediScore public crediScore;
    
    uint256 public constant PLATFORM_FEE = 5; // 5%
    uint256 public constant FIRST_PLACE = 50; // 50%
    uint256 public constant SECOND_PLACE = 25; // 25%
    uint256 public constant THIRD_PLACE = 15; // 15%

    event TournamentCreated(uint256 indexed tournamentId, uint256 entryFee, uint256 maxPlayers, GameType gameType);
    event PlayerEntered(uint256 indexed tournamentId, address indexed player);
    event TournamentStarted(uint256 indexed tournamentId, uint256 playerCount);
    event MatchCompleted(uint256 indexed tournamentId, uint256 matchId, address winner);
    event TournamentFinalized(uint256 indexed tournamentId, address winner, uint256 prize);

    constructor(address _crediScore) {
        crediScore = ICrediScore(_crediScore);
    }

    function createTournament(
        uint256 entryFee,
        uint256 maxPlayers,
        uint256 startTime,
        GameType gameType
    ) external onlyOwner returns (uint256) {
        require(maxPlayers == 4 || maxPlayers == 8 || maxPlayers == 16 || maxPlayers == 32, "Invalid player count");
        require(startTime > block.timestamp, "Invalid start time");
        require(entryFee > 0, "Invalid entry fee");

        uint256 tournamentId = tournamentCounter++;
        Tournament storage tournament = tournaments[tournamentId];
        
        tournament.entryFee = entryFee;
        tournament.maxPlayers = maxPlayers;
        tournament.startTime = startTime;
        tournament.gameType = gameType;
        tournament.state = TournamentState.Registration;

        emit TournamentCreated(tournamentId, entryFee, maxPlayers, gameType);
        return tournamentId;
    }

    function enterTournament(uint256 tournamentId) external payable nonReentrant whenNotPaused {
        Tournament storage tournament = tournaments[tournamentId];
        
        require(tournament.state == TournamentState.Registration, "Not accepting entries");
        require(msg.value >= tournament.entryFee, "Insufficient entry fee");
        require(!tournament.hasEntered[msg.sender], "Already entered");
        require(tournament.players.length < tournament.maxPlayers, "Tournament full");

        tournament.hasEntered[msg.sender] = true;
        tournament.players.push(msg.sender);
        tournament.prizePool += msg.value;

        emit PlayerEntered(tournamentId, msg.sender);

        if (tournament.players.length == tournament.maxPlayers) {
            tournament.state = TournamentState.Seeding;
        }
    }

    function startTournament(uint256 tournamentId) external onlyOwner {
        Tournament storage tournament = tournaments[tournamentId];
        
        require(tournament.state == TournamentState.Seeding, "Cannot start");
        require(block.timestamp >= tournament.startTime, "Too early");
        require(tournament.players.length >= 4, "Not enough players");

        tournament.state = TournamentState.InProgress;
        _generateBracket(tournamentId);

        emit TournamentStarted(tournamentId, tournament.players.length);
    }

    function _generateBracket(uint256 tournamentId) internal {
        Tournament storage tournament = tournaments[tournamentId];
        uint256 playerCount = tournament.players.length;
        
        // Generate first round matches
        for (uint256 i = 0; i < playerCount / 2; i++) {
            uint256 matchId = tournament.matchCount++;
            Match storage newMatch = tournament.matches[matchId];
            newMatch.player1 = tournament.players[i * 2];
            newMatch.player2 = tournament.players[i * 2 + 1];
        }
    }

    function submitMatchResult(
        uint256 tournamentId,
        uint256 matchId,
        address winner,
        uint256 score1,
        uint256 score2
    ) external onlyOwner {
        Tournament storage tournament = tournaments[tournamentId];
        Match storage matchData = tournament.matches[matchId];
        
        require(tournament.state == TournamentState.InProgress, "Tournament not active");
        require(!matchData.isComplete, "Match already complete");
        require(winner == matchData.player1 || winner == matchData.player2, "Invalid winner");

        matchData.winner = winner;
        matchData.player1Score = score1;
        matchData.player2Score = score2;
        matchData.isComplete = true;

        emit MatchCompleted(tournamentId, matchId, winner);
    }

    function finalizeTournament(uint256 tournamentId, address winner) external onlyOwner nonReentrant {
        Tournament storage tournament = tournaments[tournamentId];
        
        require(tournament.state == TournamentState.InProgress, "Invalid state");
        require(tournament.hasEntered[winner], "Winner not in tournament");

        tournament.state = TournamentState.Finalized;
        tournament.winner = winner;

        uint256 platformFee = (tournament.prizePool * PLATFORM_FEE) / 100;
        uint256 distributablePool = tournament.prizePool - platformFee;
        
        uint256 firstPrize = (distributablePool * FIRST_PLACE) / 100;

        (bool success, ) = winner.call{value: firstPrize}("");
        require(success, "Prize transfer failed");

        // Update credit score
        crediScore.updateSkillScore(winner, 1, tournament.players.length);

        tournament.state = TournamentState.PayoutComplete;
        emit TournamentFinalized(tournamentId, winner, firstPrize);
    }

    function getTournamentInfo(uint256 tournamentId) external view returns (
        uint256 entryFee,
        uint256 maxPlayers,
        uint256 currentPlayers,
        TournamentState state,
        uint256 prizePool,
        address winner
    ) {
        Tournament storage tournament = tournaments[tournamentId];
        return (
            tournament.entryFee,
            tournament.maxPlayers,
            tournament.players.length,
            tournament.state,
            tournament.prizePool,
            tournament.winner
        );
    }

    function getMatch(uint256 tournamentId, uint256 matchId) external view returns (
        address player1,
        address player2,
        address winner,
        uint256 score1,
        uint256 score2,
        bool isComplete
    ) {
        Match storage matchData = tournaments[tournamentId].matches[matchId];
        return (
            matchData.player1,
            matchData.player2,
            matchData.winner,
            matchData.player1Score,
            matchData.player2Score,
            matchData.isComplete
        );
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    receive() external payable {}
}
