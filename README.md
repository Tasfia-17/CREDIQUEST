<div align="center">

<img src="https://github.com/Tasfia-17/CREDIQUEST/blob/main/.github/logo.svg" width="500" alt="CrediQuest Logo"/>

<h1>CrediQuest</h1>
<h3>Play. Save. Build Credit.</h3>

<p>A gamified ROSCA platform on Creditcoin blockchain combining savings circles, skill-based tournaments, and on-chain credit scoring.</p>

<img src="https://img.shields.io/badge/Solidity-^0.8.20-363636?style=flat-square&logo=solidity" alt="Solidity"/>
<img src="https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js" alt="Next.js"/>
<img src="https://img.shields.io/badge/Creditcoin-Testnet-FF6B00?style=flat-square" alt="Creditcoin"/>
<img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License"/>

<p>
  <a href="#problem">Problem</a> •
  <a href="#solution">Solution</a> •
  <a href="#features">Features</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#demo">Demo</a>
</p>

</div>

---

## Problem

<div align="center">
<img src="https://github.com/Tasfia-17/CREDIQUEST/blob/main/.github/problem.svg" width="900" alt="Problem Statement"/>
</div>

**1.4 Billion People Are Unbanked**

Traditional Rotating Savings and Credit Associations (ROSCAs) handle over $10 billion annually but face critical challenges:

- **Trust Deficit**: No enforceable guarantees, relying solely on personal relationships
- **Zero Transparency**: No auditable records of contributions or distributions  
- **Credit Invisibility**: Participation does not build formal credit history
- **Limited Scale**: Restricted to small local groups due to trust constraints
- **Stagnant Innovation**: Same mechanics for decades without improvement

---

## Solution

<div align="center">
<img src="https://github.com/Tasfia-17/CREDIQUEST/blob/main/.github/solution.svg" width="900" alt="Solution Overview"/>
</div>

**CrediQuest** revolutionizes ROSCAs by bringing them on-chain with three core innovations:

### Blockchain-Powered Trust
Smart contracts eliminate personal trust requirements. Contributions held in transparent, auditable escrow. Distributions automated and guaranteed.

### Gamification Layer  
Skill-based tournaments make saving fun and rewarding. Players compete for prize pools while building credit scores through consistent participation.

### Credit Score Bridge
Every contribution and tournament victory builds on-chain reputation verifiable by DeFi protocols and traditional lenders through Creditcoin's oracle network.

---

## Features

<div align="center">
<img src="https://raw.githubusercontent.com/Tasfia-17/CREDIQUEST/main/.github/features.svg" alt="Key Features" width="900"/>
</div>

### ROSCA Savings Circles

Traditional rotating savings reimagined for Web3:

- **Flexible Parameters**: Set contribution amount, cycle duration, member count
- **Multiple Payout Modes**: Rotation, Auction, Lottery, Credit Score-based
- **Smart Contract Escrow**: Funds secured in auditable contracts
- **Automated Cycles**: No manual coordination needed
- **Anti-Spam Protection**: Stake requirement prevents bad actors

### Skill-Based Tournaments

Risk-to-earn gaming with sustainable economics:

- **Credit Dash**: Reaction time clicking game (60 seconds)
- **Memory Vault**: Pattern matching challenge (progressive difficulty)
- **Market Maker**: Trading simulation (coming soon)
- **Prize Distribution**: 50% first, 25% second, 15% third
- **Credit Boost**: Winners gain reputation points

### Multi-Dimensional Credit Scoring

Build reputation that matters:

- **Savings Score** (40%): Contribution consistency and streak bonuses
- **Skill Score** (35%): Tournament performance and rankings
- **Social Score** (25%): Guild participation and referrals
- **5 Tiers**: Bronze, Silver, Gold, Platinum, Diamond
- **Achievement System**: Unlock badges for milestones

---

## Architecture

<div align="center">
<img src="https://raw.githubusercontent.com/Tasfia-17/CREDIQUEST/main/.github/architecture.svg" alt="System Architecture" width="900"/>
</div>

### Three-Layer Architecture

**Frontend Layer**
- Next.js 14 with App Router for optimal performance
- Phaser 3 game engine for browser-based minigames
- wagmi and viem for type-safe Web3 interactions
- TanStack Query for efficient data caching

**Smart Contract Layer**
- RoscaCore: Circle lifecycle with state machine pattern
- CrediScore: Multi-dimensional reputation with access control
- TournamentArena: Tournament brackets and prize distribution
- All contracts use OpenZeppelin security primitives

**Blockchain Layer**
- Creditcoin EVM Testnet (Chain ID: 1029)
- EVM-compatible for Solidity smart contracts
- Native CTC token for gas and transactions
- Block explorer for transparency

---

## How It Works

<div align="center">
<img src="https://raw.githubusercontent.com/Tasfia-17/CREDIQUEST/main/.github/flow.svg" alt="User Journey" width="900"/>
</div>

### The CrediQuest Cycle

**Step 1: Connect and Onboard**
- Connect MetaMask to Creditcoin Testnet
- Get testnet CTC from faucet
- View initial credit profile (Bronze tier)

**Step 2A: ROSCA Path**
- Browse active savings circles or create your own
- Set contribution amount, cycle duration, payout mode
- Join circle by paying first contribution plus 10% stake
- Contribute on time each cycle to build savings score
- Receive payout when your turn comes
- Complete circle to unlock achievements

**Step 2B: Tournament Path**
- Browse active tournaments by game type
- Pay entry fee to join bracket
- Play skill-based minigame
- Submit score with anti-cheat proof
- Win prizes based on ranking
- Boost skill score with victories

**Step 3: Credit Score Growth**
- Every action updates multi-dimensional score
- Savings score increases with on-time contributions
- Skill score rises with tournament performance
- Social score grows through referrals and guilds
- Tier upgrades unlock new features

**Step 4: DeFi Integration**
- High credit scores visible to Creditcoin oracle
- Partner protocols verify reputation
- Access loans, lending, microfinance
- Real-world financial inclusion achieved

---

## Smart Contracts

<div align="center">
<img src="https://raw.githubusercontent.com/Tasfia-17/CREDIQUEST/main/.github/contracts.svg" alt="Smart Contracts" width="900"/>
</div>

### Contract Details

**RoscaCore.sol** - Circle Lifecycle Management (200+ lines)
- Complete ROSCA mechanics with state machine
- 4 payout modes: Rotation, Auction, Lottery, Credit Score
- UUPS upgradeable proxy for future improvements
- ReentrancyGuard prevents reentrancy attacks
- Pausable for emergency stops
- 10% anti-spam stake requirement

**CrediScore.sol** - Multi-Dimensional Reputation (150+ lines)
- Tracks 3 score dimensions with weighted averaging
- 5-tier system from Bronze to Diamond
- Bitmap achievements for gas-efficient storage
- AccessControl ensures only game contracts update scores
- Time-weighted calculations prevent flash loan exploits

**TournamentArena.sol** - Skill-Based Competitions (180+ lines)
- Single-elimination brackets for 4-32 players
- Entry fees create prize pools (no token inflation)
- Automated prize distribution with configurable splits
- Integration with CrediScore for reputation updates
- Match result verification with proof system

---

## Technology Stack

<div align="center">
<img src="https://raw.githubusercontent.com/Tasfia-17/CREDIQUEST/main/.github/tech-stack.svg" alt="Technology Stack" width="900"/>
</div>

### Stack Breakdown

**Blockchain**
- Solidity ^0.8.20
- Hardhat + Foundry
- OpenZeppelin
- Creditcoin EVM

**Frontend**
- Next.js 14
- TypeScript
- Tailwind CSS
- wagmi + viem

**Gaming**
- Phaser 3
- Canvas API
- Arcade Physics
- Howler.js

**Tools**
- pnpm workspaces
- Biome linter
- GitHub Actions
- Vercel deployment

---

## Quick Start

### Prerequisites

```bash
Node.js >= 18.0.0
pnpm >= 8.0.0
Foundry (latest)
MetaMask extension
```

### Installation

```bash
# Clone repository
git clone https://github.com/Tasfia-17/CREDIQUEST.git
cd CREDIQUEST

# Install dependencies
pnpm install

# Setup environment
cp packages/contracts/.env.example packages/contracts/.env
cp packages/frontend/.env.example packages/frontend/.env

# Configure MetaMask
# Network: Creditcoin Testnet
# RPC: https://rpc.cc3-testnet.creditcoin.network
# Chain ID: 1029
# Symbol: CTC
```

### Development

```bash
# Terminal 1: Build contracts
cd packages/contracts
forge build
forge test -vvv

# Terminal 2: Run frontend
cd packages/frontend
pnpm dev
```

Visit http://localhost:3000

### Deployment

```bash
# Deploy contracts
cd packages/contracts
pnpm deploy:testnet

# Update frontend with addresses
# Edit packages/frontend/.env

# Deploy frontend
cd packages/frontend
pnpm build
# Deploy to Vercel
```

---

## Project Structure

```
crediquest/
├── packages/
│   ├── contracts/              # Smart contracts
│   │   ├── src/
│   │   │   ├── RoscaCore.sol
│   │   │   ├── CrediScore.sol
│   │   │   └── TournamentArena.sol
│   │   ├── script/deploy.js
│   │   ├── hardhat.config.js
│   │   └── foundry.toml
│   │
│   ├── frontend/               # Next.js app
│   │   ├── app/
│   │   │   ├── page.tsx
│   │   │   ├── circles/
│   │   │   ├── tournaments/
│   │   │   └── profile/
│   │   ├── components/
│   │   └── lib/
│   │
│   ├── game-engine/            # Phaser 3 games
│   │   └── src/games/
│   │       ├── CreditDash.ts
│   │       └── MemoryVault.ts
│   │
│   └── shared-types/           # TypeScript types
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── SETUP.md
│   └── DEMO_SCRIPT.md
│
├── .github/workflows/ci.yml
├── pnpm-workspace.yaml
└── README.md
```

---

## Deployment

<div align="center">
<img src="https://raw.githubusercontent.com/Tasfia-17/CREDIQUEST/main/.github/deployment.svg" alt="Deployment Pipeline" width="800"/>
</div>

### Deployed Contracts (Testnet)

| Contract | Address | Explorer |
|----------|---------|----------|
| RoscaCore | TBD | [View](https://creditcoin-testnet.blockscout.com) |
| CrediScore | TBD | [View](https://creditcoin-testnet.blockscout.com) |
| TournamentArena | TBD | [View](https://creditcoin-testnet.blockscout.com) |

### Frontend

- Production: TBD
- Platform: Vercel
- Network: Creditcoin Testnet

---

## Demo

<div align="center">
<img src="https://raw.githubusercontent.com/Tasfia-17/CREDIQUEST/main/.github/demo.svg" alt="Demo Resources" width="800"/>
</div>

### Resources

- **Demo Video**: [Watch on YouTube](https://youtube.com/...)
- **Live App**: [Try CrediQuest](https://crediquest.vercel.app)
- **Pitch Deck**: [View Slides](./docs/pitch-deck.pdf)
- **Architecture**: [Technical Details](./ARCHITECTURE.md)
- **Setup Guide**: [Installation](./SETUP.md)

### Demo Highlights

3-minute video showcasing:
- Creating savings circle with custom parameters
- Joining tournament and playing Credit Dash
- Viewing credit score dashboard with tier progression
- Smart contract interactions on Creditcoin testnet
- Real-time updates and Web3 wallet integration

---

## Roadmap

<div align="center">
<img src="https://raw.githubusercontent.com/Tasfia-17/CREDIQUEST/main/.github/roadmap.svg" alt="Development Roadmap" width="900"/>
</div>

### Development Phases

**Q2 2026 - MVP (Current)**
- Core ROSCA mechanics
- Basic credit scoring
- 2 skill-based minigames
- Creditcoin testnet deployment
- Web application with Web3

**Q3 2026 - Enhancement**
- Mobile application (React Native)
- Guild system for teams
- Additional minigames (5+ total)
- Advanced tournament formats
- Subgraph for querying

**Q4 2026 - Mainnet Prep**
- Security audit (CertiK/OpenZeppelin)
- Creditcoin Oracle integration
- Partner protocol integrations
- Legal compliance review
- Stress testing

**Q1 2027 - Production**
- Creditcoin mainnet deployment
- DeFi lending partnerships
- Microfinance integration
- Real-world credit bridging
- Community governance (DAO)

---

## Contributing

We welcome contributions! Here's how:

### Ways to Contribute

- Report bugs and issues
- Suggest new features
- Improve documentation
- Submit pull requests
- Test on different devices
- Spread the word

### Development Process

```bash
# Fork and clone
git checkout -b feature/your-feature

# Make changes and test
pnpm test

# Commit with conventional commits
git commit -m "feat: add feature"

# Push and create PR
git push origin feature/your-feature
```

### Code Standards

- Follow existing code style
- Write tests for new features
- Update documentation
- Use TypeScript for type safety
- Follow Solidity best practices

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

## Acknowledgments

<div align="center">
<img src="https://raw.githubusercontent.com/Tasfia-17/CREDIQUEST/main/.github/thanks.svg" alt="Acknowledgments" width="800"/>
</div>

**Built With Inspiration From:**

- **Xitique Onchain**: ROSCA contract patterns and mechanics
- **Loot Survivor**: Sustainable tournament economics model
- **Guild.xyz**: Membership and reputation systems
- **Creditcoin**: EVM infrastructure and credit mission alignment
- **OpenZeppelin**: Security-audited smart contract libraries

---

## Contact

<div align="center">

**Team CrediQuest**

[GitHub](https://github.com/Tasfia-17/CREDIQUEST) •
[Twitter](https://twitter.com/crediquest) •
[Discord](https://discord.gg/crediquest) •
[Email](mailto:team@crediquest.io)

**Built for BUIDL CTC Hackathon 2026**

<img src="https://raw.githubusercontent.com/Tasfia-17/CREDIQUEST/main/.github/logo-small.svg" alt="CrediQuest" width="200"/>

</div>

---

<div align="center">
  <p>Made with care for financial inclusion</p>
  <p>Copyright 2026 CrediQuest Team</p>
</div>
