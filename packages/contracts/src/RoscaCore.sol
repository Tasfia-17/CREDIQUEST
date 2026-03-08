// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract RoscaCore is ReentrancyGuardUpgradeable, PausableUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    enum CircleState { Idle, Active, CycleInProgress, Distribution, Completed, EmergencyPause }
    enum PayoutMode { Rotation, Auction, Lottery, CreditScore }

    struct Circle {
        address creator;
        uint256 contributionAmount;
        uint256 cycleDuration;
        uint8 maxMembers;
        uint8 currentMembers;
        uint8 currentCycle;
        PayoutMode payoutMode;
        CircleState state;
        uint256 totalPooled;
        uint256 lastCycleTime;
        mapping(address => Member) members;
        address[] memberList;
        mapping(uint8 => address) cycleWinners;
    }

    struct Member {
        bool isActive;
        uint256 joinedAt;
        uint256 totalContributed;
        uint8 contributionCount;
        uint8 missedPayments;
        bool hasReceivedPayout;
    }

    uint256 public circleCounter;
    mapping(uint256 => Circle) public circles;
    
    uint256 public constant STAKE_MULTIPLIER = 10; // 10% of contribution as anti-spam stake
    uint256 public constant PLATFORM_FEE = 5; // 5% platform fee

    event CircleCreated(uint256 indexed circleId, address indexed creator, uint256 contributionAmount);
    event MemberJoined(uint256 indexed circleId, address indexed member, uint256 stakeAmount);
    event ContributionMade(uint256 indexed circleId, address indexed member, uint256 amount, uint256 cycle);
    event PayoutDistributed(uint256 indexed circleId, address indexed winner, uint256 amount, uint8 cycle);
    event CircleCompleted(uint256 indexed circleId, uint256 totalDistributed);
    event EmergencyWithdrawal(uint256 indexed circleId, address indexed member, uint256 amount);

    function initialize() public initializer {
        __ReentrancyGuard_init();
        __Pausable_init();
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function createCircle(
        uint256 contributionAmount,
        uint256 cycleDuration,
        uint8 maxMembers,
        PayoutMode mode
    ) external whenNotPaused returns (uint256) {
        require(contributionAmount > 0, "Invalid contribution");
        require(maxMembers >= 4 && maxMembers <= 12, "Members must be 4-12");
        require(cycleDuration >= 1 days, "Cycle too short");

        uint256 circleId = circleCounter++;
        Circle storage circle = circles[circleId];
        
        circle.creator = msg.sender;
        circle.contributionAmount = contributionAmount;
        circle.cycleDuration = cycleDuration;
        circle.maxMembers = maxMembers;
        circle.payoutMode = mode;
        circle.state = CircleState.Idle;

        emit CircleCreated(circleId, msg.sender, contributionAmount);
        return circleId;
    }

    function joinCircle(uint256 circleId) external payable nonReentrant whenNotPaused {
        Circle storage circle = circles[circleId];
        require(circle.state == CircleState.Idle, "Circle not accepting members");
        require(circle.currentMembers < circle.maxMembers, "Circle full");
        require(!circle.members[msg.sender].isActive, "Already member");
        
        uint256 requiredStake = (circle.contributionAmount * STAKE_MULTIPLIER) / 100;
        require(msg.value >= circle.contributionAmount + requiredStake, "Insufficient payment");

        // Checks-Effects-Interactions pattern
        circle.members[msg.sender] = Member({
            isActive: true,
            joinedAt: block.timestamp,
            totalContributed: circle.contributionAmount,
            contributionCount: 1,
            missedPayments: 0,
            hasReceivedPayout: false
        });
        
        circle.memberList.push(msg.sender);
        circle.currentMembers++;
        circle.totalPooled += circle.contributionAmount;

        emit MemberJoined(circleId, msg.sender, requiredStake);

        if (circle.currentMembers == circle.maxMembers) {
            circle.state = CircleState.Active;
            circle.lastCycleTime = block.timestamp;
        }
    }

    function contribute(uint256 circleId) external payable nonReentrant whenNotPaused {
        Circle storage circle = circles[circleId];
        Member storage member = circle.members[msg.sender];
        
        require(member.isActive, "Not a member");
        require(circle.state == CircleState.Active || circle.state == CircleState.CycleInProgress, "Invalid state");
        require(msg.value >= circle.contributionAmount, "Insufficient contribution");
        require(member.contributionCount < circle.maxMembers, "Already contributed all cycles");

        member.totalContributed += circle.contributionAmount;
        member.contributionCount++;
        circle.totalPooled += circle.contributionAmount;

        emit ContributionMade(circleId, msg.sender, circle.contributionAmount, circle.currentCycle);
    }

    function distribute(uint256 circleId) external nonReentrant whenNotPaused {
        Circle storage circle = circles[circleId];
        require(circle.state == CircleState.Active, "Cannot distribute");
        require(block.timestamp >= circle.lastCycleTime + circle.cycleDuration, "Cycle not complete");

        circle.state = CircleState.Distribution;
        
        address winner = _selectWinner(circleId);
        uint256 poolAmount = circle.contributionAmount * circle.currentMembers;
        uint256 platformFee = (poolAmount * PLATFORM_FEE) / 100;
        uint256 payoutAmount = poolAmount - platformFee;

        circle.members[winner].hasReceivedPayout = true;
        circle.cycleWinners[circle.currentCycle] = winner;
        circle.currentCycle++;
        circle.lastCycleTime = block.timestamp;

        (bool success, ) = winner.call{value: payoutAmount}("");
        require(success, "Transfer failed");

        emit PayoutDistributed(circleId, winner, payoutAmount, circle.currentCycle - 1);

        if (circle.currentCycle >= circle.maxMembers) {
            circle.state = CircleState.Completed;
            emit CircleCompleted(circleId, circle.totalPooled);
        } else {
            circle.state = CircleState.Active;
        }
    }

    function _selectWinner(uint256 circleId) internal view returns (address) {
        Circle storage circle = circles[circleId];
        
        if (circle.payoutMode == PayoutMode.Rotation) {
            for (uint256 i = 0; i < circle.memberList.length; i++) {
                address member = circle.memberList[i];
                if (!circle.members[member].hasReceivedPayout) {
                    return member;
                }
            }
        }
        
        return circle.memberList[0]; // Fallback
    }

    function emergencyWithdraw(uint256 circleId) external nonReentrant {
        Circle storage circle = circles[circleId];
        Member storage member = circle.members[msg.sender];
        
        require(member.isActive, "Not a member");
        require(circle.state == CircleState.EmergencyPause, "Not in emergency");

        uint256 refundAmount = member.totalContributed;
        member.isActive = false;
        member.totalContributed = 0;

        (bool success, ) = msg.sender.call{value: refundAmount}("");
        require(success, "Refund failed");

        emit EmergencyWithdrawal(circleId, msg.sender, refundAmount);
    }

    function getCircleInfo(uint256 circleId) external view returns (
        address creator,
        uint256 contributionAmount,
        uint8 currentMembers,
        uint8 maxMembers,
        CircleState state,
        uint8 currentCycle
    ) {
        Circle storage circle = circles[circleId];
        return (
            circle.creator,
            circle.contributionAmount,
            circle.currentMembers,
            circle.maxMembers,
            circle.state,
            circle.currentCycle
        );
    }

    function getMemberInfo(uint256 circleId, address member) external view returns (
        bool isActive,
        uint256 totalContributed,
        uint8 contributionCount,
        bool hasReceivedPayout
    ) {
        Member storage m = circles[circleId].members[member];
        return (m.isActive, m.totalContributed, m.contributionCount, m.hasReceivedPayout);
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    receive() external payable {}
}
