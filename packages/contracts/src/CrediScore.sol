// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract CrediScore is AccessControl, ReentrancyGuard {
    bytes32 public constant GAME_CONTRACT_ROLE = keccak256("GAME_CONTRACT_ROLE");
    
    struct PlayerProfile {
        uint256 savingsScore;      // 0-1000
        uint256 skillScore;        // 0-1000
        uint256 socialScore;       // 0-1000
        uint256 totalScore;        // Weighted average
        uint256 tier;              // 1-5 (Bronze to Diamond)
        bytes32 achievements;      // Bitmap of unlocked badges
        address[] sponsoredPlayers;
        uint256 lastUpdated;
    }

    mapping(address => PlayerProfile) public profiles;
    
    // Weights for score calculation (must sum to 100)
    uint256 public constant SAVINGS_WEIGHT = 40;
    uint256 public constant SKILL_WEIGHT = 35;
    uint256 public constant SOCIAL_WEIGHT = 25;

    event SavingsScoreUpdated(address indexed player, uint256 newScore, bool onTime, uint256 streak);
    event SkillScoreUpdated(address indexed player, uint256 newScore, uint256 tournamentRank);
    event SocialScoreUpdated(address indexed player, uint256 newScore);
    event AchievementUnlocked(address indexed player, uint8 achievementId);
    event TierChanged(address indexed player, uint256 oldTier, uint256 newTier);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function updateSavingsScore(
        address player,
        bool onTime,
        uint256 streak
    ) external onlyRole(GAME_CONTRACT_ROLE) {
        PlayerProfile storage profile = profiles[player];
        
        uint256 baseScore = profile.savingsScore;
        
        if (onTime) {
            uint256 streakBonus = streak * 10; // 10 points per streak
            baseScore = _min(baseScore + 50 + streakBonus, 1000);
        } else {
            baseScore = baseScore > 30 ? baseScore - 30 : 0;
        }
        
        profile.savingsScore = baseScore;
        profile.lastUpdated = block.timestamp;
        _recalculateTotal(player);
        
        emit SavingsScoreUpdated(player, baseScore, onTime, streak);
    }

    function updateSkillScore(
        address player,
        uint256 tournamentRank,
        uint256 totalPlayers
    ) external onlyRole(GAME_CONTRACT_ROLE) {
        PlayerProfile storage profile = profiles[player];
        
        // Higher rank = more points (1st place gets most)
        uint256 rankScore = ((totalPlayers - tournamentRank + 1) * 1000) / totalPlayers;
        
        // Weighted average with previous score (70% old, 30% new)
        uint256 newScore = (profile.skillScore * 70 + rankScore * 30) / 100;
        profile.skillScore = newScore;
        profile.lastUpdated = block.timestamp;
        _recalculateTotal(player);
        
        emit SkillScoreUpdated(player, newScore, tournamentRank);
    }

    function updateSocialScore(
        address player,
        uint256 referralCount
    ) external onlyRole(GAME_CONTRACT_ROLE) {
        PlayerProfile storage profile = profiles[player];
        
        uint256 newScore = _min(referralCount * 100, 1000); // 100 points per referral, max 1000
        profile.socialScore = newScore;
        profile.lastUpdated = block.timestamp;
        _recalculateTotal(player);
        
        emit SocialScoreUpdated(player, newScore);
    }

    function _recalculateTotal(address player) internal {
        PlayerProfile storage profile = profiles[player];
        
        uint256 weightedScore = (
            profile.savingsScore * SAVINGS_WEIGHT +
            profile.skillScore * SKILL_WEIGHT +
            profile.socialScore * SOCIAL_WEIGHT
        ) / 100;
        
        profile.totalScore = weightedScore;
        
        uint256 oldTier = profile.tier;
        uint256 newTier = calculateTier(weightedScore);
        
        if (oldTier != newTier) {
            profile.tier = newTier;
            emit TierChanged(player, oldTier, newTier);
        }
    }

    function calculateTier(uint256 totalScore) public pure returns (uint256) {
        if (totalScore >= 800) return 5; // Diamond
        if (totalScore >= 650) return 4; // Platinum
        if (totalScore >= 500) return 3; // Gold
        if (totalScore >= 350) return 2; // Silver
        return 1; // Bronze
    }

    function unlockAchievement(address player, uint8 achievementId) external onlyRole(GAME_CONTRACT_ROLE) {
        require(achievementId < 256, "Invalid achievement ID");
        
        PlayerProfile storage profile = profiles[player];
        bytes32 mask = bytes32(uint256(1) << achievementId);
        
        require(profile.achievements & mask == 0, "Already unlocked");
        
        profile.achievements |= mask;
        emit AchievementUnlocked(player, achievementId);
    }

    function hasAchievement(address player, uint8 achievementId) external view returns (bool) {
        bytes32 mask = bytes32(uint256(1) << achievementId);
        return (profiles[player].achievements & mask) != 0;
    }

    function getCreditworthiness(address player) external view returns (
        uint256 score,
        uint256 tier,
        uint256 savingsScore,
        uint256 skillScore,
        uint256 socialScore
    ) {
        PlayerProfile storage profile = profiles[player];
        return (
            profile.totalScore,
            profile.tier,
            profile.savingsScore,
            profile.skillScore,
            profile.socialScore
        );
    }

    function getProfile(address player) external view returns (PlayerProfile memory) {
        return profiles[player];
    }

    function _min(uint256 a, uint256 b) internal pure returns (uint256) {
        return a < b ? a : b;
    }

    function grantGameRole(address gameContract) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(GAME_CONTRACT_ROLE, gameContract);
    }
}
