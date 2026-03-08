# CrediQuest - Technical Architecture

## System Overview

CrediQuest is a full-stack Web3 gaming platform that combines:
- **ROSCA (Rotating Savings and Credit Association)** mechanics
- **Skill-based tournament gaming**
- **On-chain credit scoring**

## Smart Contract Architecture

### RoscaCore.sol
**Purpose**: Manages savings circles lifecycle

**State Machine**:
```
Idle → Active → CycleInProgress → Distribution → Completed
                                              ↓
                                      EmergencyPause
```

**Key Features**:
- UUPS upgradeable proxy pattern
- ReentrancyGuard on all payable functions
- 10% anti-spam stake requirement
- 4 payout modes: Rotation, Auction, Lottery, CreditScore

**Gas Optimization**:
- Packed structs to minimize storage slots
- Bitmap for member tracking
- Batch operations where possible

### CrediScore.sol
**Purpose**: Multi-dimensional reputation system

**Scoring Algorithm**:
```
totalScore = (savingsScore * 40% + skillScore * 35% + socialScore * 25%)
tier = calculateTier(totalScore)
```

**Tiers**:
- Bronze: 0-349
- Silver: 350-499
- Gold: 500-649
- Platinum: 650-799
- Diamond: 800-1000

**Security**:
- AccessControl for game contract permissions
- Time-weighted averages prevent flash loan attacks
- Soulbound achievements (non-transferable)

### TournamentArena.sol
**Purpose**: Skill-based tournament management

**Tournament Flow**:
1. Registration: Players pay entry fee
2. Seeding: Bracket generation (Chainlink VRF for randomness)
3. InProgress: Matches played off-chain, results submitted
4. Finalized: Winner determined
5. PayoutComplete: Prizes distributed

**Prize Distribution**:
- 1st: 50%
- 2nd: 25%
- 3rd: 15%
- Platform: 5%
- Guild: 5% (if team win)

## Frontend Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Web3**: wagmi + viem
- **State**: Zustand
- **Styling**: Tailwind CSS + custom glassmorphism
- **Queries**: TanStack Query

### Page Structure
```
/                    # Landing page
/circles             # Browse circles
/circles/create      # Create new circle
/circles/[id]        # Circle detail
/tournaments         # Browse tournaments
/tournaments/[id]    # Tournament bracket
/profile             # Player dashboard
/guild               # Guild management
```

### Design System
**Colors**:
- Primary: #FF6B00 (Creditcoin Orange)
- Background: #1A1A1A (Dark)
- Accent: #2D2D2D (Gray)

**Typography**:
- UI: Inter
- Game: Press Start 2P

**Components**:
- Glassmorphism cards (bg-white/5 + backdrop-blur)
- SVG animated backgrounds (autumn, forest, ocean, sky, river)
- Responsive mobile-first design

## Game Engine Architecture

### Phaser 3 Integration
**Games**:
1. **Credit Dash** (Reaction Time)
   - Click targets as fast as possible
   - Anti-cheat: Pattern variance detection
   - Duration: 60 seconds

2. **Memory Vault** (Pattern Memory)
   - Simon-says style
   - Progressive difficulty
   - Anti-cheat: Server-side pattern generation

3. **Market Maker** (Strategy) - Coming Soon
   - Trading simulation
   - Same market data for all players

**Anti-Cheat Measures**:
- Click pattern variance analysis
- Server-side validation
- ZK proofs for score submission (simplified)

## Deployment Architecture

### Creditcoin Testnet
- **Chain ID**: 1029
- **RPC**: https://rpc.cc3-testnet.creditcoin.network
- **Explorer**: https://creditcoin-testnet.blockscout.com

### Contract Deployment Flow
```bash
1. Deploy CrediScore
2. Deploy RoscaCore (UUPS proxy)
3. Deploy TournamentArena
4. Grant game roles to contracts
5. Verify on explorer
```

### Frontend Deployment
- **Platform**: Vercel
- **Environment**: Production
- **CDN**: Vercel Edge Network

## Security Considerations

### Smart Contracts
- ✅ ReentrancyGuard on all external calls
- ✅ Pausable for emergency stops
- ✅ AccessControl for privileged functions
- ✅ CEI pattern (Checks-Effects-Interactions)
- ✅ No floating pragmas
- ✅ OpenZeppelin battle-tested contracts

### Frontend
- ✅ Input validation
- ✅ Gas estimation before transactions
- ✅ Human-readable error messages
- ✅ Read-only mode without wallet

## Testing Strategy

### Smart Contracts
```bash
# Unit tests
forge test -vvv

# Fuzz tests
forge test --fuzz-runs 1000

# Gas report
forge test --gas-report

# Coverage
forge coverage
```

### Frontend
- Component testing with React Testing Library
- E2E testing with Playwright
- Web3 mocking with wagmi test utilities

## Performance Optimization

### Smart Contracts
- Packed structs
- Bitmap for flags
- Batch operations
- View functions for reads

### Frontend
- Code splitting
- Image optimization (WebP)
- Lazy loading
- React.memo for expensive components

## Monitoring & Analytics

### On-Chain
- Event emission for all state changes
- Subgraph for indexing
- Real-time WebSocket updates

### Off-Chain
- Vercel Analytics
- Error tracking (Sentry)
- User analytics (privacy-focused)

## Future Enhancements

### Phase 2
- [ ] Mobile app (React Native)
- [ ] Guild system (DAO governance)
- [ ] Advanced tournaments (64+ players)
- [ ] Subgraph deployment

### Phase 3
- [ ] Security audit (CertiK/OpenZeppelin)
- [ ] Mainnet deployment
- [ ] Creditcoin Oracle integration
- [ ] DeFi lending partnerships

## References

- [Xitique Onchain](https://github.com/chiringa-3/Xitique-Onchain) - ROSCA patterns
- [Loot Survivor](https://github.com/BibliothecaDAO/loot-survivor) - Tournament economics
- [Guild.xyz](https://guild.xyz) - Membership patterns
- [Creditcoin Docs](https://docs.creditcoin.org) - EVM integration
