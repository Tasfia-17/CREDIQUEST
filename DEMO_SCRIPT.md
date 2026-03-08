# CrediQuest - Demo Script

## Video Demo Script (3 minutes)

### [0:00-0:30] HOOK & PROBLEM
**Visual**: Show traditional ROSCA problems
- Cash under mattress
- Trust issues
- No credit history

**Narration**:
"1.4 billion people are unbanked. They save through informal circles called ROSCAs, handling $10 billion annually. But there's no trust, no transparency, and no credit history. What if we could fix this with blockchain and gaming?"

**Transition**: Fade to CrediQuest logo

---

### [0:30-1:30] PRODUCT WALKTHROUGH

#### Scene 1: Create Savings Circle (30s)
**Visual**: Screen recording of circle creation
1. Navigate to /circles/create
2. Fill form:
   - Contribution: 0.1 CTC
   - Duration: 7 days
   - Members: 8
   - Mode: Rotation
3. Click "Create Circle"
4. MetaMask popup
5. Transaction confirmed

**Narration**:
"CrediQuest brings ROSCAs on-chain. Create a savings circle with friends. Set your contribution amount, cycle duration, and payout mode. Smart contracts handle everything transparently."

#### Scene 2: Join Tournament (30s)
**Visual**: Screen recording of tournament entry
1. Navigate to /tournaments
2. Select "Credit Dash Championship"
3. Click "Enter Tournament"
4. Pay entry fee
5. Play game (show gameplay)
6. Score: 850 points

**Narration**:
"Want to boost your savings? Enter skill-based tournaments. Play minigames, compete for prizes, and build your credit score. No luck, pure skill."

#### Scene 3: Credit Score Update (30s)
**Visual**: Profile page animation
1. Navigate to /profile
2. Show credit score dashboard
3. Animate score increase
4. Tier upgrade: Silver → Gold
5. Achievement unlocked

**Narration**:
"Every contribution and victory builds your on-chain credit score. Three dimensions: savings consistency, gaming skill, and social reputation. Unlock tiers from Bronze to Diamond."

---

### [1:30-2:30] TECHNICAL DEPTH

#### Scene 4: Smart Contracts (30s)
**Visual**: Split screen
- Left: Solidity code (RoscaCore.sol)
- Right: Creditcoin testnet explorer

**Narration**:
"Built on Creditcoin EVM with three core contracts. RoscaCore manages savings circles with upgradeable proxy pattern. CrediScore tracks multi-dimensional reputation. TournamentArena handles skill-based competitions. All open source, all auditable."

**Highlight**:
- Show ReentrancyGuard
- Show event emissions
- Show transaction on explorer

#### Scene 5: Credit Oracle Integration (30s)
**Visual**: Architecture diagram
```
CrediQuest → CrediScore → Creditcoin Oracle → Real-world DeFi
```

**Narration**:
"Your on-chain score isn't just for games. Creditcoin's oracle bridges to real-world credit systems. Unlock DeFi loans, microfinance, and financial inclusion. Gaming becomes your credit history."

#### Scene 6: Sustainable Economics (30s)
**Visual**: Animated infographic
- Entry fees → Prize pools
- No token inflation
- Risk-to-earn model

**Narration**:
"No inflationary tokens. Entry fees create prize pools. Winners earn real value. Inspired by Loot Survivor's $400K sustainable model. This isn't play-to-earn, it's risk-to-earn."

---

### [2:30-3:00] CLOSING

**Visual**: Montage of features
- Circles filling up
- Tournaments in progress
- Credit scores rising
- Happy users (illustrated characters)

**Narration**:
"CrediQuest: Play. Save. Build Credit. We're not just building a game. We're building financial infrastructure for the unbanked. Join us in making DeFi accessible to everyone."

**End Screen**:
- QR code to live demo
- GitHub repo link
- "Built for BUIDL CTC Hackathon 2026"
- Team names

---

## Live Demo Checklist

### Pre-Demo Setup
- [ ] Deploy contracts to Creditcoin testnet
- [ ] Fund demo wallet with CTC
- [ ] Create 2-3 test circles
- [ ] Create 1-2 test tournaments
- [ ] Prepare backup recording

### Demo Flow
1. **Landing Page** (10s)
   - Show hero section
   - Highlight stats

2. **Browse Circles** (20s)
   - Show active circles
   - Filter by contribution amount

3. **Create Circle** (30s)
   - Fill form
   - Submit transaction
   - Show confirmation

4. **Join Circle** (20s)
   - Select circle
   - Pay contribution + stake
   - Show member list update

5. **Play Tournament** (40s)
   - Enter tournament
   - Play Credit Dash game
   - Submit score
   - Show leaderboard

6. **View Profile** (20s)
   - Show credit score
   - Show achievements
   - Show stats

7. **Smart Contract** (20s)
   - Show on explorer
   - Show events
   - Show verified code

### Backup Plan
- Pre-recorded video if live demo fails
- Screenshots of key features
- Testnet explorer links ready

---

## Pitch Deck Talking Points

### Slide 1: Title
"CrediQuest - Play. Save. Build Credit."

### Slide 2: Problem
- 1.4B unbanked globally
- $10B in informal ROSCAs annually
- No trust, no transparency, no credit history

### Slide 3: Solution
- Blockchain-based ROSCA platform
- Gamified participation incentives
- On-chain credit scoring
- Creditcoin integration for real-world impact

### Slide 4: Market
- $10B ROSCA market in Africa alone
- 2B+ gamers worldwide
- Growing DeFi adoption in emerging markets

### Slide 5: Product
- Screenshots of key features
- Highlight unique value props

### Slide 6: Tech Stack
- Solidity + OpenZeppelin
- Creditcoin EVM
- Next.js + Phaser 3
- Subgraph indexing

### Slide 7: Traction
- Testnet deployment metrics
- User feedback
- Community engagement

### Slide 8: Team
- Names + roles
- Relevant experience
- Why we're building this

### Slide 9: Roadmap
- Q2 2026: Mainnet launch
- Q3 2026: Mobile app
- Q4 2026: DeFi partnerships

### Slide 10: Ask
- CEIP fast-track
- $250K for mainnet development
- Partnership with Creditcoin Foundation

---

## Q&A Preparation

### Expected Questions

**Q: How do you prevent cheating in games?**
A: Multi-layered approach: client-side pattern detection, server-side validation, and ZK proofs for score submission. We analyze click patterns for bot-like behavior.

**Q: What if a circle member doesn't pay?**
A: Smart contract enforces contributions. Missed payments deduct reputation points. After 2 missed payments, member is removed and stake is forfeited to remaining members.

**Q: How does credit score translate to real-world loans?**
A: Creditcoin's oracle reads our on-chain scores and bridges to traditional credit bureaus. We're working with microfinance partners for pilot programs.

**Q: What's your revenue model?**
A: 5% platform fee on circle distributions and tournament prizes. Future: premium features, guild subscriptions, and DeFi protocol fees.

**Q: Why Creditcoin?**
A: Creditcoin's mission aligns perfectly with ours - building credit infrastructure. Their EVM compatibility made development seamless, and their oracle is crucial for real-world integration.

**Q: How do you scale to millions of users?**
A: Layer 2 rollups for high-frequency gaming transactions. Main circles stay on L1 for security. Subgraph for efficient querying.

**Q: What about regulatory compliance?**
A: ROSCAs are legal in most jurisdictions. We're working with legal counsel for KYC/AML compliance in regulated markets. Gaming tournaments follow skill-based gaming laws.
