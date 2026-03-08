# CrediQuest - Complete Setup Guide

## Prerequisites

### Required Software
- **Node.js**: v18.0.0 or higher
- **pnpm**: v8.0.0 or higher
- **Foundry**: Latest version
- **Git**: Latest version

### Installation Commands

```bash
# Install Node.js (using nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18

# Install pnpm
npm install -g pnpm

# Install Foundry
curl -L https://foundry.paradigm.xyz | bash
foundryup

# Verify installations
node --version    # Should be v18+
pnpm --version    # Should be v8+
forge --version   # Should show Foundry version
```

## Project Setup

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/crediquest
cd crediquest
```

### 2. Install Dependencies

```bash
# Install all workspace dependencies
pnpm install

# This will install:
# - Root dependencies (Husky, Biome, Turbo)
# - Contract dependencies (Hardhat, Foundry, OpenZeppelin)
# - Frontend dependencies (Next.js, wagmi, Tailwind)
# - Game engine dependencies (Phaser, Howler)
```

### 3. Configure Environment Variables

#### Contracts Environment

```bash
cd packages/contracts
cp .env.example .env
```

Edit `.env`:
```env
PRIVATE_KEY=your_private_key_here_without_0x_prefix
CREDITCOIN_RPC=https://rpc.cc3-testnet.creditcoin.network
ETHERSCAN_API_KEY=your_creditcoin_explorer_key
```

**Getting a Private Key**:
1. Open MetaMask
2. Click account menu → Account Details → Export Private Key
3. Enter password
4. Copy private key (remove 0x prefix)

**⚠️ SECURITY WARNING**: Never commit `.env` files or share private keys!

#### Frontend Environment

```bash
cd packages/frontend
cp .env.example .env
```

Edit `.env`:
```env
NEXT_PUBLIC_CREDITCOIN_RPC=https://rpc.cc3-testnet.creditcoin.network
NEXT_PUBLIC_CHAIN_ID=1029
NEXT_PUBLIC_ROSCA_CORE_ADDRESS=
NEXT_PUBLIC_CREDISCORE_ADDRESS=
NEXT_PUBLIC_TOURNAMENT_ARENA_ADDRESS=
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=
```

**Note**: Contract addresses will be filled after deployment.

## MetaMask Configuration

### Add Creditcoin Testnet

1. Open MetaMask
2. Click network dropdown → Add Network
3. Enter details:
   - **Network Name**: Creditcoin Testnet
   - **RPC URL**: https://rpc.cc3-testnet.creditcoin.network
   - **Chain ID**: 1029
   - **Currency Symbol**: CTC
   - **Block Explorer**: https://creditcoin-testnet.blockscout.com

4. Click "Save"

### Get Testnet CTC

1. Visit Creditcoin faucet: [faucet URL]
2. Enter your wallet address
3. Request testnet CTC
4. Wait for confirmation (~30 seconds)

## Smart Contract Development

### Compile Contracts

```bash
cd packages/contracts

# Using Foundry
forge build

# Using Hardhat
npx hardhat compile
```

### Run Tests

```bash
# Run all tests
forge test -vvv

# Run specific test
forge test --match-test testCreateCircle -vvv

# Run with gas report
forge test --gas-report

# Run fuzz tests
forge test --fuzz-runs 1000
```

### Deploy to Testnet

```bash
# Make sure you have testnet CTC in your wallet
# Check balance
cast balance YOUR_ADDRESS --rpc-url $CREDITCOIN_RPC

# Deploy contracts
npx hardhat run script/deploy.js --network creditcoin_testnet

# Save the output addresses!
# Example output:
# CrediScore deployed to: 0x1234...
# RoscaCore deployed to: 0x5678...
# TournamentArena deployed to: 0x9abc...
```

### Verify Contracts

```bash
# Verify CrediScore
npx hardhat verify --network creditcoin_testnet CREDISCORE_ADDRESS

# Verify RoscaCore (proxy)
npx hardhat verify --network creditcoin_testnet ROSCA_CORE_ADDRESS

# Verify TournamentArena
npx hardhat verify --network creditcoin_testnet TOURNAMENT_ARENA_ADDRESS CREDISCORE_ADDRESS
```

## Frontend Development

### Update Contract Addresses

After deployment, update `packages/frontend/.env`:

```env
NEXT_PUBLIC_ROSCA_CORE_ADDRESS=0x1234...
NEXT_PUBLIC_CREDISCORE_ADDRESS=0x5678...
NEXT_PUBLIC_TOURNAMENT_ARENA_ADDRESS=0x9abc...
```

### Run Development Server

```bash
cd packages/frontend
pnpm dev
```

Visit: http://localhost:3000

### Build for Production

```bash
pnpm build
pnpm start
```

## Game Engine Development

### Build Game Engine

```bash
cd packages/game-engine
pnpm build
```

### Test Games Locally

Create a test HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Game Test</title>
</head>
<body>
  <div id="game-container"></div>
  <script src="dist/index.js"></script>
  <script>
    const { initCreditDash } = window.CrediQuestGames;
    initCreditDash('game-container', (result) => {
      console.log('Game complete:', result);
    });
  </script>
</body>
</html>
```

## Common Issues & Solutions

### Issue: "Cannot find module '@openzeppelin/contracts'"

**Solution**:
```bash
cd packages/contracts
pnpm install
```

### Issue: "Transaction reverted without a reason"

**Solution**:
- Check you have enough CTC for gas
- Verify contract addresses are correct
- Check function parameters match ABI

### Issue: "Network not found"

**Solution**:
- Verify MetaMask is on Creditcoin Testnet (Chain ID: 1029)
- Check RPC URL is correct
- Try switching networks and back

### Issue: "Nonce too high"

**Solution**:
- Reset MetaMask account: Settings → Advanced → Reset Account

### Issue: Frontend can't connect to wallet

**Solution**:
- Refresh page
- Disconnect and reconnect wallet
- Clear browser cache
- Check console for errors

## Development Workflow

### Daily Development

```bash
# Terminal 1: Watch contract changes
cd packages/contracts
forge test --watch

# Terminal 2: Run frontend
cd packages/frontend
pnpm dev

# Terminal 3: Build game engine
cd packages/game-engine
pnpm dev
```

### Before Committing

```bash
# Run linter
pnpm lint

# Run tests
cd packages/contracts && forge test

# Build all packages
pnpm build
```

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "feat: add your feature"

# Push and create PR
git push origin feature/your-feature
```

## Deployment to Production

### Frontend Deployment (Vercel)

1. Push code to GitHub
2. Visit https://vercel.com
3. Import repository
4. Configure environment variables
5. Deploy

### Contract Deployment (Mainnet)

**⚠️ IMPORTANT**: Only deploy to mainnet after:
- [ ] Complete security audit
- [ ] Extensive testnet testing
- [ ] Legal compliance review
- [ ] Insurance coverage

```bash
# Update hardhat.config.js with mainnet RPC
# Deploy to mainnet
npx hardhat run script/deploy.js --network creditcoin_mainnet

# Verify contracts
npx hardhat verify --network creditcoin_mainnet ...
```

## Monitoring & Maintenance

### Check Contract Status

```bash
# Check contract balance
cast balance CONTRACT_ADDRESS --rpc-url $CREDITCOIN_RPC

# Read contract state
cast call CONTRACT_ADDRESS "circleCounter()" --rpc-url $CREDITCOIN_RPC

# Check events
cast logs --address CONTRACT_ADDRESS --rpc-url $CREDITCOIN_RPC
```

### Monitor Frontend

- Vercel Dashboard: https://vercel.com/dashboard
- Analytics: Check user metrics
- Errors: Monitor error logs

## Getting Help

### Resources
- **Documentation**: See README.md and ARCHITECTURE.md
- **Issues**: GitHub Issues
- **Discord**: [Community Discord]
- **Email**: team@crediquest.io

### Debugging Tips

1. **Check browser console** for frontend errors
2. **Use Foundry debugger** for contract issues:
   ```bash
   forge test --debug testFunctionName
   ```
3. **Check transaction on explorer** for on-chain issues
4. **Enable verbose logging** in development

## Next Steps

After setup:
1. ✅ Run tests to verify everything works
2. ✅ Deploy to testnet
3. ✅ Create test circles and tournaments
4. ✅ Test full user flow
5. ✅ Prepare demo video
6. ✅ Submit to hackathon!

---

**Need help?** Open an issue or reach out on Discord!
