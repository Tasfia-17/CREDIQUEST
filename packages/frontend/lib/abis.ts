export const ROSCA_CORE_ABI = [
  "function createCircle(uint256 contributionAmount, uint256 cycleDuration, uint8 maxMembers, uint8 mode) external returns (uint256)",
  "function joinCircle(uint256 circleId) external payable",
  "function contribute(uint256 circleId) external payable",
  "function distribute(uint256 circleId) external",
  "function getCircleInfo(uint256 circleId) external view returns (address creator, uint256 contributionAmount, uint8 currentMembers, uint8 maxMembers, uint8 state, uint8 currentCycle)",
  "function getMemberInfo(uint256 circleId, address member) external view returns (bool isActive, uint256 totalContributed, uint8 contributionCount, bool hasReceivedPayout)",
  "event CircleCreated(uint256 indexed circleId, address indexed creator, uint256 contributionAmount)",
  "event MemberJoined(uint256 indexed circleId, address indexed member, uint256 stakeAmount)",
  "event ContributionMade(uint256 indexed circleId, address indexed member, uint256 amount, uint256 cycle)"
] as const;

export const CREDISCORE_ABI = [
  "function getCreditworthiness(address player) external view returns (uint256 score, uint256 tier, uint256 savingsScore, uint256 skillScore, uint256 socialScore)",
  "function getProfile(address player) external view returns (tuple(uint256 savingsScore, uint256 skillScore, uint256 socialScore, uint256 totalScore, uint256 tier, bytes32 achievements, address[] sponsoredPlayers, uint256 lastUpdated))",
  "event SavingsScoreUpdated(address indexed player, uint256 newScore, bool onTime, uint256 streak)",
  "event TierChanged(address indexed player, uint256 oldTier, uint256 newTier)"
] as const;

export const TOURNAMENT_ARENA_ABI = [
  "function enterTournament(uint256 tournamentId) external payable",
  "function getTournamentInfo(uint256 tournamentId) external view returns (uint256 entryFee, uint256 maxPlayers, uint256 currentPlayers, uint8 state, uint256 prizePool, address winner)",
  "function getMatch(uint256 tournamentId, uint256 matchId) external view returns (address player1, address player2, address winner, uint256 score1, uint256 score2, bool isComplete)",
  "event TournamentCreated(uint256 indexed tournamentId, uint256 entryFee, uint256 maxPlayers, uint8 gameType)",
  "event PlayerEntered(uint256 indexed tournamentId, address indexed player)"
] as const;
