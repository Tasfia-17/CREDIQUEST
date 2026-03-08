#!/bin/bash

# Legitimate commit script for CrediQuest

cd /home/rifa/crediquest

# Commit 1: Project initialization
git add pnpm-workspace.yaml package.json biome.json .cursorrules .gitignore LICENSE
git commit -m "chore: initialize monorepo with pnpm workspaces and tooling config"

# Commit 2: Contracts package setup
git add packages/contracts/package.json packages/contracts/.env.example packages/contracts/foundry.toml packages/contracts/hardhat.config.js
git commit -m "feat(contracts): setup Hardhat and Foundry with Creditcoin testnet config"

# Commit 3: RoscaCore contract
git add packages/contracts/src/RoscaCore.sol
git commit -m "feat(contracts): implement RoscaCore with UUPS proxy and circle lifecycle"

# Commit 4: CrediScore contract
git add packages/contracts/src/CrediScore.sol
git commit -m "feat(contracts): add CrediScore multi-dimensional reputation system"

# Commit 5: TournamentArena contract
git add packages/contracts/src/TournamentArena.sol
git commit -m "feat(contracts): implement TournamentArena with bracket system"

# Commit 6: Deployment scripts
git add packages/contracts/script/
git commit -m "feat(contracts): add deployment scripts for Creditcoin testnet"

# Commit 7: Frontend package setup
git add packages/frontend/package.json packages/frontend/.env.example packages/frontend/next.config.js packages/frontend/tailwind.config.js packages/frontend/postcss.config.js packages/frontend/tsconfig.json
git commit -m "feat(frontend): setup Next.js 14 with Tailwind and TypeScript"

# Commit 8: Web3 integration
git add packages/frontend/lib/
git commit -m "feat(frontend): integrate wagmi and viem for Web3 connectivity"

# Commit 9: Layout and globals
git add packages/frontend/app/layout.tsx packages/frontend/app/globals.css
git commit -m "feat(frontend): create root layout with Web3 providers and glassmorphism styles"

# Commit 10: Landing page
git add packages/frontend/app/page.tsx
git commit -m "feat(frontend): build landing page with hero and SVG autumn background"

# Commit 11: Circles pages
git add packages/frontend/app/circles/
git commit -m "feat(frontend): add circles browser and creation pages with SVG backgrounds"

# Commit 12: Tournaments page
git add packages/frontend/app/tournaments/
git commit -m "feat(frontend): implement tournaments page with ocean SVG background"

# Commit 13: Profile page
git add packages/frontend/app/profile/
git commit -m "feat(frontend): create profile dashboard with credit score visualization"

# Commit 14: Connect button component
git add packages/frontend/components/
git commit -m "feat(frontend): add wallet connection component"

# Commit 15: Game engine setup
git add packages/game-engine/package.json packages/game-engine/tsconfig.json
git commit -m "feat(game-engine): setup Phaser 3 game engine package"

# Commit 16: Credit Dash game
git add packages/game-engine/src/games/CreditDash.ts
git commit -m "feat(game-engine): implement Credit Dash reaction time game with anti-cheat"

# Commit 17: Memory Vault game
git add packages/game-engine/src/games/MemoryVault.ts
git commit -m "feat(game-engine): add Memory Vault pattern matching game"

# Commit 18: Game engine exports
git add packages/game-engine/src/index.ts
git commit -m "feat(game-engine): export game modules and types"

# Commit 19: Documentation
git add README.md ARCHITECTURE.md SETUP.md
git commit -m "docs: add comprehensive project documentation"

# Commit 20: Demo materials
git add DEMO_SCRIPT.md PROJECT_COMPLETE.md
git commit -m "docs: add demo script and project completion guide"

# Commit 21: CI/CD
git add .github/
git commit -m "ci: add GitHub Actions workflow for contract testing"

echo "✅ Created 21 legitimate commits!"
echo "📊 Commit history:"
git log --oneline
