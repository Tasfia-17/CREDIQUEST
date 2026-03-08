# CrediQuest - ROSCA Gaming Protocol

**Play. Save. Build Credit.**

A gamified rotating savings and credit association (ROSCA) platform where players join savings circles, compete in skill-based tournaments, and build on-chain credit scores that unlock real-world DeFi opportunities on Creditcoin.

## 🏆 Hackathon Submission

**BUIDL CTC Hackathon 2026**

- **Category**: DeFi + Gaming
- **Chain**: Creditcoin EVM Testnet (Chain ID: 1029)
- **Demo**: [Live Demo URL]
- **Video**: [YouTube Demo]

## 🎯 Problem & Solution

**Problem**: 1.4 billion people are unbanked. Informal savings circles (ROSCAs) handle $10B+ annually but lack trust, transparency, and credit history building.

**Solution**: CrediQuest brings ROSCAs on-chain with:
- Transparent smart contract escrow
- Gamified participation incentives
- On-chain credit scoring for DeFi access
- Sustainable tournament economics

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js 14)                    │
│  React UI + Phaser 3 Games + wagmi/viem Web3               │
└────────────────────┬────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│                 SMART CONTRACTS (Solidity)                  │
│  RoscaCore │ CrediScore │ TournamentArena                   │
└────────────────────┬────────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────────┐
│              CREDITCOIN EVM TESTNET (1029)                  │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+
- Foundry (for contract testing)
- MetaMask with Creditcoin Testnet configured

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/crediquest
cd crediquest

# Install dependencies
pnpm install

# Setup environment variables
cp packages/contracts/.env.example packages/contracts/.env
cp packages/frontend/.env.example packages/frontend/.env

# Edit .env files with your keys
```

### Running Locally

```bash
# Terminal 1: Compile contracts
cd packages/contracts
pnpm build

# Terminal 2: Start frontend
cd packages/frontend
pnpm dev
```

Visit `http://localhost:3000`

### Deploy to Creditcoin Testnet

```bash
cd packages/contracts

# Deploy contracts
pnpm deploy:testnet

# Copy deployed addresses to frontend/.env
# NEXT_PUBLIC_ROSCA_CORE_ADDRESS=0x...
# NEXT_PUBLIC_CREDISCORE_ADDRESS=0x...
# NEXT_PUBLIC_TOURNAMENT_ARENA_ADDRESS=0x...
```

## 📦 Project Structure

```
crediquest/
├── packages/
│   ├── contracts/          # Solidity smart contracts
│   │   ├── src/
│   │   │   ├── RoscaCore.sol
│   │   │   ├── CrediScore.sol
│   │   │   └── TournamentArena.sol
│   │   ├── test/
│   │   └── script/
│   ├── frontend/           # Next.js web app
│   │   ├── app/
│   │   │   ├── circles/
│   │   │   ├── tournaments/
│   │   │   └── profile/
│   │   ├── components/
│   │   └── lib/
│   ├── game-engine/        # Phaser 3 games
│   │   └── src/games/
│   │       ├── CreditDash.ts
│   │       └── MemoryVault.ts
│   └── shared-types/       # TypeScript types
├── pnpm-workspace.yaml
└── README.md
```

## 🎮 Core Features

### 1. ROSCA Circles

- **Create Circle**: Set contribution amount, cycle duration, max members
- **Join Circle**: Pay first contribution + anti-spam stake
- **Contribute**: Regular payments tracked on-chain
- **Distribute**: Automated payouts via smart contract
- **Modes**: Rotation, Auction, Lottery, Credit Score-based

### 2. Skill-Based Tournaments

- **Credit Dash**: Reaction time clicking game
- **Memory Vault**: Pattern memory challenge
- **Market Maker**: Trading simulation (coming soon)

Entry fees create prize pools. Winners earn:
- 50% of pool (1st place)
- 25% of pool (2nd place)
- 15% of pool (3rd place)
- Credit score boost

### 3. Credit Scoring

Multi-dimensional reputation system:

- **Savings Score** (40%): ROSCA contribution consistency
- **Skill Score** (35%): Tournament performance
- **Social Score** (25%): Guild participation & referrals

**Tiers**: Bronze → Silver → Gold → Platinum → Diamond

## 🔐 Smart Contract Details

### RoscaCore.sol

- **Upgradeable**: UUPS proxy pattern
- **Security**: ReentrancyGuard, Pausable
- **State Machine**: Idle → Active → Distribution → Completed
- **Anti-spam**: 10% stake required to join

### CrediScore.sol

- **Access Control**: Only game contracts can update scores
- **Soulbound**: Achievements are non-transferable
- **Time-weighted**: Prevents flash loan attacks
- **Bitmap**: Gas-efficient achievement storage

### TournamentArena.sol

- **Bracket Generation**: Single-elimination (4-32 players)
- **Prize Distribution**: Automated via smart contract
- **Anti-cheat**: Score validation with variance checks

## 🧪 Testing

```bash
# Run Foundry tests
cd packages/contracts
forge test -vvv

# Gas report
forge test --gas-report

# Fuzz testing
forge test --fuzz-runs 1000
```

## 🌐 Deployed Contracts (Testnet)

| Contract | Address | Explorer |
|----------|---------|----------|
| RoscaCore | `0x...` | [View](https://creditcoin-testnet.blockscout.com) |
| CrediScore | `0x...` | [View](https://creditcoin-testnet.blockscout.com) |
| TournamentArena | `0x...` | [View](https://creditcoin-testnet.blockscout.com) |

## 🎨 Design System

- **Colors**: Creditcoin Orange (#FF6B00), Dark (#1A1A1A)
- **Typography**: Inter (UI), Press Start 2P (Game)
- **Style**: Glassmorphism with subtle gradients
- **Responsive**: Mobile-first design

## 🛣️ Roadmap

### Phase 1: MVP (Current)
- ✅ Core ROSCA mechanics
- ✅ Basic credit scoring
- ✅ 2 minigames
- ✅ Creditcoin testnet deployment

### Phase 2: Enhancement
- [ ] Mobile app (React Native)
- [ ] Guild system (teams)
- [ ] Advanced tournaments (32+ players)
- [ ] Subgraph indexing

### Phase 3: Mainnet
- [ ] Security audit
- [ ] Creditcoin mainnet deployment
- [ ] Oracle integration for real credit scores
- [ ] DeFi lending integration

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- **Xitique Onchain**: ROSCA contract inspiration
- **Loot Survivor**: Tournament economics model
- **Guild.xyz**: Membership patterns
- **Creditcoin**: EVM infrastructure

## 📞 Contact

- **Team**: [Your Names]
- **Email**: team@crediquest.io
- **Twitter**: [@CrediQuest](https://twitter.com/crediquest)
- **Discord**: [Join Community](https://discord.gg/crediquest)

---

**Built with ❤️ for BUIDL CTC Hackathon 2026**
