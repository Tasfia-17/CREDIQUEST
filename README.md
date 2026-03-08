<div align="center">

<!-- CrediQuest Logo -->
<svg width="400" height="120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B00;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF8C42;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Coin Stack Icon -->
  <ellipse cx="60" cy="70" rx="35" ry="10" fill="url(#logoGradient)" opacity="0.3"/>
  <ellipse cx="60" cy="60" rx="35" ry="10" fill="url(#logoGradient)" opacity="0.5"/>
  <ellipse cx="60" cy="50" rx="35" ry="10" fill="url(#logoGradient)"/>
  <path d="M 25 50 L 25 70 Q 25 75 60 75 Q 95 75 95 70 L 95 50" fill="url(#logoGradient)" opacity="0.8"/>
  
  <!-- Game Controller Icon -->
  <rect x="110" y="45" width="50" height="30" rx="15" fill="url(#logoGradient)"/>
  <circle cx="125" cy="60" r="4" fill="#1A1A1A"/>
  <circle cx="145" cy="60" r="4" fill="#1A1A1A"/>
  <rect x="130" y="52" width="2" height="16" fill="#1A1A1A"/>
  <rect x="122" y="60" width="16" height="2" fill="#1A1A1A"/>
  
  <!-- Text -->
  <text x="180" y="65" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="url(#logoGradient)">CrediQuest</text>
  <text x="180" y="85" font-family="Arial, sans-serif" font-size="12" fill="#888">Play. Save. Build Credit.</text>
</svg>

<h3>A Gamified ROSCA Platform on Creditcoin</h3>

<p>Join savings circles, compete in skill-based tournaments, and build on-chain credit scores that unlock real-world DeFi opportunities.</p>

<!-- Badges -->
<p>
  <img src="https://img.shields.io/badge/Solidity-^0.8.20-363636?style=flat-square&logo=solidity" alt="Solidity">
  <img src="https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/Creditcoin-Testnet-FF6B00?style=flat-square" alt="Creditcoin">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
</p>

<p>
  <a href="#features">Features</a> •
  <a href="#architecture">Architecture</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#demo">Demo</a>
</p>

</div>

---

## Table of Contents

- [Problem Statement](#problem-statement)
- [Solution Overview](#solution-overview)
- [Key Features](#key-features)
- [System Architecture](#system-architecture)
- [How It Works](#how-it-works)
- [Smart Contracts](#smart-contracts)
- [Technology Stack](#technology-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Demo](#demo)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Problem Statement

<div align="center">

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="problemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#FF6B00;stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:#FF6B00;stop-opacity:0.05" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="800" height="300" fill="url(#problemGrad)"/>
  
  <!-- Problem 1: Unbanked Population -->
  <g transform="translate(80, 60)">
    <circle cx="40" cy="40" r="35" fill="#FF6B00" opacity="0.2"/>
    <path d="M 40 20 Q 30 20 30 30 L 30 50 Q 30 60 40 60 Q 50 60 50 50 L 50 30 Q 50 20 40 20 Z" fill="#FF6B00"/>
    <circle cx="40" cy="15" r="8" fill="#FF6B00"/>
    <text x="40" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">1.4B Unbanked</text>
    <text x="40" y="120" text-anchor="middle" font-size="11" fill="#666">No access to</text>
    <text x="40" y="135" text-anchor="middle" font-size="11" fill="#666">financial services</text>
  </g>
  
  <!-- Problem 2: Trust Issues -->
  <g transform="translate(280, 60)">
    <circle cx="40" cy="40" r="35" fill="#FF6B00" opacity="0.2"/>
    <rect x="25" y="30" width="30" height="25" rx="2" fill="none" stroke="#FF6B00" stroke-width="3"/>
    <circle cx="40" cy="42" r="6" fill="none" stroke="#FF6B00" stroke-width="2"/>
    <rect x="38" y="42" width="4" height="8" fill="#FF6B00"/>
    <line x1="30" y1="25" x2="50" y2="25" stroke="#FF6B00" stroke-width="2"/>
    <text x="40" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">No Trust</text>
    <text x="40" y="120" text-anchor="middle" font-size="11" fill="#666">Informal savings</text>
    <text x="40" y="135" text-anchor="middle" font-size="11" fill="#666">lack transparency</text>
  </g>
  
  <!-- Problem 3: No Credit History -->
  <g transform="translate(480, 60)">
    <circle cx="40" cy="40" r="35" fill="#FF6B00" opacity="0.2"/>
    <rect x="20" y="25" width="40" height="30" rx="3" fill="none" stroke="#FF6B00" stroke-width="3"/>
    <line x1="28" y1="35" x2="52" y2="35" stroke="#FF6B00" stroke-width="2"/>
    <line x1="28" y1="42" x2="45" y2="42" stroke="#FF6B00" stroke-width="2"/>
    <line x1="28" y1="49" x2="48" y2="49" stroke="#FF6B00" stroke-width="2"/>
    <line x1="35" y1="20" x2="45" y2="30" stroke="#FF6B00" stroke-width="3"/>
    <line x1="45" y1="20" x2="35" y2="30" stroke="#FF6B00" stroke-width="3"/>
    <text x="40" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">No Credit Score</text>
    <text x="40" y="120" text-anchor="middle" font-size="11" fill="#666">Cannot access</text>
    <text x="40" y="135" text-anchor="middle" font-size="11" fill="#666">DeFi opportunities</text>
  </g>
  
  <!-- Problem 4: Market Size -->
  <g transform="translate(680, 60)">
    <circle cx="40" cy="40" r="35" fill="#FF6B00" opacity="0.2"/>
    <text x="40" y="50" text-anchor="middle" font-size="28" font-weight="bold" fill="#FF6B00">$10B</text>
    <text x="40" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Annual Volume</text>
    <text x="40" y="120" text-anchor="middle" font-size="11" fill="#666">In informal</text>
    <text x="40" y="135" text-anchor="middle" font-size="11" fill="#666">ROSCA markets</text>
  </g>
  
  <!-- Bottom text -->
  <text x="400" y="220" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">Traditional ROSCAs: Cash under mattresses, no transparency, no credit building</text>
  <text x="400" y="245" text-anchor="middle" font-size="14" fill="#666">Billions of people excluded from the financial system</text>
</svg>

</div>

Traditional Rotating Savings and Credit Associations (ROSCAs) have served communities for centuries, but they face critical challenges:

- **Trust Deficit**: Members rely on personal relationships with no enforceable guarantees
- **Opacity**: No transparent record of contributions or distributions
- **Credit Invisibility**: Participation does not build formal credit history
- **Limited Scale**: Restricted to small, local groups due to trust constraints
- **No Innovation**: Stuck with the same mechanics for decades

---

## Solution Overview

<div align="center">

<svg width="800" height="350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="solutionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B00;stop-opacity:0.1" />
      <stop offset="100%" style="stop-color:#00D4FF;stop-opacity:0.1" />
    </linearGradient>
    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#FF6B00" />
    </marker>
  </defs>
  
  <!-- Background -->
  <rect width="800" height="350" fill="url(#solutionGrad)"/>
  
  <!-- Central Platform -->
  <g transform="translate(400, 175)">
    <circle r="60" fill="#FF6B00" opacity="0.2"/>
    <circle r="45" fill="#FF6B00"/>
    <text y="5" text-anchor="middle" font-size="16" font-weight="bold" fill="white">CrediQuest</text>
    <text y="20" text-anchor="middle" font-size="10" fill="white">Blockchain</text>
    <text y="32" text-anchor="middle" font-size="10" fill="white">Platform</text>
  </g>
  
  <!-- Feature 1: Smart Contracts -->
  <g transform="translate(150, 80)">
    <rect x="-50" y="-30" width="100" height="60" rx="8" fill="white" stroke="#FF6B00" stroke-width="2"/>
    <path d="M -20 -10 L -10 0 L -20 10 M 0 -10 L 10 0 L 0 10 M 20 -10 L 30 0 L 20 10" stroke="#FF6B00" stroke-width="2" fill="none"/>
    <text y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Smart Contracts</text>
    <text y="45" text-anchor="middle" font-size="9" fill="#666">Automated escrow</text>
  </g>
  <line x1="200" y1="100" x2="350" y2="150" stroke="#FF6B00" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Feature 2: Gaming -->
  <g transform="translate(650, 80)">
    <rect x="-50" y="-30" width="100" height="60" rx="8" fill="white" stroke="#FF6B00" stroke-width="2"/>
    <rect x="-15" y="-10" width="30" height="20" rx="10" fill="#FF6B00"/>
    <circle cx="-5" cy="0" r="2" fill="white"/>
    <circle cx="5" cy="0" r="2" fill="white"/>
    <text y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Skill Gaming</text>
    <text y="45" text-anchor="middle" font-size="9" fill="#666">Tournament prizes</text>
  </g>
  <line x1="600" y1="100" x2="450" y2="150" stroke="#FF6B00" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Feature 3: Credit Scoring -->
  <g transform="translate(150, 270)">
    <rect x="-50" y="-30" width="100" height="60" rx="8" fill="white" stroke="#FF6B00" stroke-width="2"/>
    <path d="M -20 5 L -10 -5 L 0 0 L 10 -10 L 20 -5" stroke="#FF6B00" stroke-width="3" fill="none"/>
    <text y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Credit Scoring</text>
    <text y="45" text-anchor="middle" font-size="9" fill="#666">On-chain reputation</text>
  </g>
  <line x1="200" y1="250" x2="350" y2="200" stroke="#FF6B00" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Feature 4: DeFi Access -->
  <g transform="translate(650, 270)">
    <rect x="-50" y="-30" width="100" height="60" rx="8" fill="white" stroke="#FF6B00" stroke-width="2"/>
    <circle cx="0" cy="-5" r="12" fill="none" stroke="#FF6B00" stroke-width="2"/>
    <text y="0" text-anchor="middle" font-size="14" font-weight="bold" fill="#FF6B00">$</text>
    <text y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">DeFi Integration</text>
    <text y="45" text-anchor="middle" font-size="9" fill="#666">Real-world loans</text>
  </g>
  <line x1="600" y1="250" x2="450" y2="200" stroke="#FF6B00" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Bottom benefit text -->
  <text x="400" y="330" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Transparent • Trustless • Gamified • Credit-Building</text>
</svg>

</div>

CrediQuest revolutionizes traditional ROSCAs by bringing them on-chain with three core innovations:

### Blockchain-Powered Trust
Smart contracts eliminate the need for personal trust. Contributions are held in transparent, auditable escrow. Distributions are automated and guaranteed.

### Gamification Layer
Skill-based tournaments make saving fun and rewarding. Players compete for prize pools while building their credit scores through consistent participation.

### Credit Score Bridge
Every contribution and tournament victory builds an on-chain reputation that can be verified by DeFi protocols and traditional lenders through Creditcoin's oracle network.

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

---

## How It Works

<div align="center">

<svg width="900" height="700" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="flowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B00;stop-opacity:0.1" />
      <stop offset="100%" style="stop-color:#FF6B00;stop-opacity:0.02" />
    </linearGradient>
    <marker id="flowArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#FF6B00" />
    </marker>
  </defs>
  
  <rect width="900" height="700" fill="url(#flowGrad)"/>
  
  <!-- Title -->
  <text x="450" y="40" text-anchor="middle" font-size="24" font-weight="bold" fill="#333">User Journey Flow</text>
  
  <!-- Step 1: Connect Wallet -->
  <g transform="translate(150, 100)">
    <circle r="50" fill="#FF6B00" opacity="0.2"/>
    <circle r="35" fill="#FF6B00"/>
    <text y="-20" text-anchor="middle" font-size="28" fill="white" font-weight="bold">1</text>
    <path d="M -10 -5 L -10 10 Q -10 15 0 15 Q 10 15 10 10 L 10 -5 Q 10 -10 0 -10 Q -10 -10 -10 -5" fill="white"/>
    <rect x="-8" y="0" width="16" height="8" fill="#FF6B00"/>
    
    <text y="80" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Connect Wallet</text>
    <text y="100" text-anchor="middle" font-size="11" fill="#666">MetaMask + Creditcoin</text>
  </g>
  
  <line x1="200" y1="120" x2="280" y2="180" stroke="#FF6B00" stroke-width="3" marker-end="url(#flowArrow)"/>
  
  <!-- Step 2: Choose Path -->
  <g transform="translate(350, 220)">
    <rect x="-80" y="-40" width="160" height="80" rx="10" fill="white" stroke="#FF6B00" stroke-width="3"/>
    <text y="-10" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">Choose Your Path</text>
    <text y="10" text-anchor="middle" font-size="12" fill="#666">Save or Play?</text>
  </g>
  
  <!-- Path A: ROSCA -->
  <line x1="300" y1="260" x2="200" y2="340" stroke="#FF6B00" stroke-width="3" marker-end="url(#flowArrow)"/>
  
  <g transform="translate(150, 400)">
    <circle r="50" fill="#10B981" opacity="0.2"/>
    <circle r="35" fill="#10B981"/>
    <text y="-20" text-anchor="middle" font-size="28" fill="white" font-weight="bold">A</text>
    <ellipse cy="0" rx="12" ry="4" fill="white" opacity="0.5"/>
    <ellipse cy="-5" rx="12" ry="4" fill="white"/>
    
    <text y="80" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Join ROSCA Circle</text>
    <text y="100" text-anchor="middle" font-size="11" fill="#666">Contribute regularly</text>
    <text y="115" text-anchor="middle" font-size="11" fill="#666">Build savings score</text>
  </g>
  
  <!-- Path B: Tournament -->
  <line x1="400" y1="260" x2="500" y2="340" stroke="#FF6B00" stroke-width="3" marker-end="url(#flowArrow)"/>
  
  <g transform="translate(550, 400)">
    <circle r="50" fill="#0EA5E9" opacity="0.2"/>
    <circle r="35" fill="#0EA5E9"/>
    <text y="-20" text-anchor="middle" font-size="28" fill="white" font-weight="bold">B</text>
    <rect x="-12" y="-8" width="24" height="14" rx="7" fill="white"/>
    <circle cx="-5" cy="-1" r="2" fill="#0EA5E9"/>
    <circle cx="5" cy="-1" r="2" fill="#0EA5E9"/>
    
    <text y="80" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Enter Tournament</text>
    <text y="100" text-anchor="middle" font-size="11" fill="#666">Play skill games</text>
    <text y="115" text-anchor="middle" font-size="11" fill="#666">Win prizes</text>
  </g>
  
  <!-- Converge to Credit Score -->
  <line x1="200" y1="450" x2="320" y2="540" stroke="#FF6B00" stroke-width="3" marker-end="url(#flowArrow)"/>
  <line x1="500" y1="450" x2="380" y2="540" stroke="#FF6B00" stroke-width="3" marker-end="url(#flowArrow)"/>
  
  <g transform="translate(350, 600)">
    <circle r="50" fill="#8B5CF6" opacity="0.2"/>
    <circle r="35" fill="#8B5CF6"/>
    <text y="-15" text-anchor="middle" font-size="24" fill="white" font-weight="bold">★</text>
    <text y="5" text-anchor="middle" font-size="10" fill="white">CREDIT</text>
    <text y="18" text-anchor="middle" font-size="10" fill="white">SCORE</text>
    
    <text y="80" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Build Reputation</text>
    <text y="100" text-anchor="middle" font-size="11" fill="#666">Unlock DeFi access</text>
  </g>
  
  <!-- Final arrow to DeFi -->
  <line x1="450" y1="600" x2="650" y2="600" stroke="#FF6B00" stroke-width="3" marker-end="url(#flowArrow)"/>
  
  <g transform="translate(750, 600)">
    <rect x="-70" y="-40" width="140" height="80" rx="10" fill="#10B981" opacity="0.9"/>
    <text y="-10" text-anchor="middle" font-size="16" font-weight="bold" fill="white">DeFi Opportunities</text>
    <text y="10" text-anchor="middle" font-size="11" fill="white">Loans • Lending</text>
    <text y="25" text-anchor="middle" font-size="11" fill="white">Microfinance</text>
  </g>
</svg>

</div>

### The CrediQuest Cycle

**Step 1: Connect & Onboard**
- Connect MetaMask to Creditcoin Testnet
- Get testnet CTC from faucet
- View your initial credit profile (Bronze tier)

**Step 2A: ROSCA Path**
- Browse active savings circles or create your own
- Set contribution amount, cycle duration, and payout mode
- Join circle by paying first contribution plus 10% stake
- Contribute on time each cycle to build savings score
- Receive payout when your turn comes
- Complete circle to unlock achievements

**Step 2B: Tournament Path**
- Browse active tournaments by game type
- Pay entry fee to join bracket
- Play skill-based minigame (Credit Dash, Memory Vault)
- Submit score with anti-cheat proof
- Win prizes based on ranking
- Boost skill score with victories

**Step 3: Credit Score Growth**
- Every action updates your multi-dimensional score
- Savings score increases with on-time contributions
- Skill score rises with tournament performance
- Social score grows through referrals and guilds
- Tier upgrades unlock new features

**Step 4: DeFi Integration**
- High credit scores visible to Creditcoin oracle
- Partner protocols can verify your reputation
- Access loans, lending, and microfinance
- Real-world financial inclusion achieved

---

## Smart Contracts

<div align="center">

<svg width="900" height="500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="contractGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#FF6B00;stop-opacity:0.1" />
      <stop offset="100%" style="stop-color:#0EA5E9;stop-opacity:0.1" />
    </linearGradient>
  </defs>
  
  <rect width="900" height="500" fill="url(#contractGrad)"/>
  
  <!-- RoscaCore Contract -->
  <g transform="translate(150, 100)">
    <rect x="-120" y="-60" width="240" height="350" rx="10" fill="white" stroke="#FF6B00" stroke-width="3"/>
    <rect x="-120" y="-60" width="240" height="50" rx="10" fill="#FF6B00"/>
    <text y="-25" text-anchor="middle" font-size="18" font-weight="bold" fill="white">RoscaCore.sol</text>
    
    <text y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">State Machine</text>
    <rect x="-100" y="30" width="200" height="25" rx="4" fill="#FFF7ED" stroke="#FF6B00" stroke-width="1"/>
    <text y="48" text-anchor="middle" font-size="10" fill="#FF6B00">Idle → Active → Distribution</text>
    
    <text y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Key Functions</text>
    <text y="100" text-anchor="middle" font-size="10" fill="#666">createCircle()</text>
    <text y="115" text-anchor="middle" font-size="10" fill="#666">joinCircle()</text>
    <text y="130" text-anchor="middle" font-size="10" fill="#666">contribute()</text>
    <text y="145" text-anchor="middle" font-size="10" fill="#666">distribute()</text>
    
    <text y="175" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Security</text>
    <text y="195" text-anchor="middle" font-size="10" fill="#666">ReentrancyGuard</text>
    <text y="210" text-anchor="middle" font-size="10" fill="#666">Pausable</text>
    <text y="225" text-anchor="middle" font-size="10" fill="#666">UUPS Upgradeable</text>
    
    <text y="255" text-anchor="middle" font-size="11" font-weight="bold" fill="#10B981">200+ Lines</text>
  </g>
  
  <!-- CrediScore Contract -->
  <g transform="translate(450, 100)">
    <rect x="-120" y="-60" width="240" height="350" rx="10" fill="white" stroke="#0EA5E9" stroke-width="3"/>
    <rect x="-120" y="-60" width="240" height="50" rx="10" fill="#0EA5E9"/>
    <text y="-25" text-anchor="middle" font-size="18" font-weight="bold" fill="white">CrediScore.sol</text>
    
    <text y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Score Dimensions</text>
    <rect x="-100" y="30" width="200" height="25" rx="4" fill="#EFF6FF" stroke="#0EA5E9" stroke-width="1"/>
    <text y="48" text-anchor="middle" font-size="10" fill="#0EA5E9">Savings • Skill • Social</text>
    
    <text y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Key Functions</text>
    <text y="100" text-anchor="middle" font-size="10" fill="#666">updateSavingsScore()</text>
    <text y="115" text-anchor="middle" font-size="10" fill="#666">updateSkillScore()</text>
    <text y="130" text-anchor="middle" font-size="10" fill="#666">getCreditworthiness()</text>
    <text y="145" text-anchor="middle" font-size="10" fill="#666">unlockAchievement()</text>
    
    <text y="175" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Features</text>
    <text y="195" text-anchor="middle" font-size="10" fill="#666">Bitmap Achievements</text>
    <text y="210" text-anchor="middle" font-size="10" fill="#666">Access Control</text>
    <text y="225" text-anchor="middle" font-size="10" fill="#666">Time-Weighted Scores</text>
    
    <text y="255" text-anchor="middle" font-size="11" font-weight="bold" fill="#10B981">150+ Lines</text>
  </g>
  
  <!-- TournamentArena Contract -->
  <g transform="translate(750, 100)">
    <rect x="-120" y="-60" width="240" height="350" rx="10" fill="white" stroke="#10B981" stroke-width="3"/>
    <rect x="-120" y="-60" width="240" height="50" rx="10" fill="#10B981"/>
    <text y="-25" text-anchor="middle" font-size="18" font-weight="bold" fill="white">TournamentArena.sol</text>
    
    <text y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Tournament Flow</text>
    <rect x="-100" y="30" width="200" height="25" rx="4" fill="#ECFDF5" stroke="#10B981" stroke-width="1"/>
    <text y="48" text-anchor="middle" font-size="10" fill="#10B981">Register → Seed → Play</text>
    
    <text y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Key Functions</text>
    <text y="100" text-anchor="middle" font-size="10" fill="#666">createTournament()</text>
    <text y="115" text-anchor="middle" font-size="10" fill="#666">enterTournament()</text>
    <text y="130" text-anchor="middle" font-size="10" fill="#666">submitMatchResult()</text>
    <text y="145" text-anchor="middle" font-size="10" fill="#666">distributePrizes()</text>
    
    <text y="175" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Prize Split</text>
    <text y="195" text-anchor="middle" font-size="10" fill="#666">1st: 50% • 2nd: 25%</text>
    <text y="210" text-anchor="middle" font-size="10" fill="#666">3rd: 15% • Platform: 5%</text>
    <text y="225" text-anchor="middle" font-size="10" fill="#666">Guild: 5%</text>
    
    <text y="255" text-anchor="middle" font-size="11" font-weight="bold" fill="#10B981">180+ Lines</text>
  </g>
</svg>

</div>

### Contract Details

**RoscaCore.sol** - Circle Lifecycle Management
- Implements complete ROSCA mechanics with state machine
- Supports 4 payout modes: Rotation, Auction, Lottery, Credit Score
- UUPS upgradeable proxy for future improvements
- ReentrancyGuard prevents reentrancy attacks
- Pausable for emergency stops
- 10% anti-spam stake requirement

**CrediScore.sol** - Multi-Dimensional Reputation
- Tracks 3 score dimensions with weighted averaging
- 5-tier system: Bronze (0-349), Silver (350-499), Gold (500-649), Platinum (650-799), Diamond (800-1000)
- Bitmap achievements for gas-efficient storage
- AccessControl ensures only game contracts can update scores
- Time-weighted calculations prevent flash loan exploits

**TournamentArena.sol** - Skill-Based Competitions
- Single-elimination brackets for 4, 8, 16, or 32 players
- Entry fees create prize pools (no token inflation)
- Automated prize distribution with configurable splits
- Integration with CrediScore for reputation updates
- Match result verification with proof system

---

## Technology Stack

<div align="center">

<svg width="900" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B00;stop-opacity:0.05" />
      <stop offset="100%" style="stop-color:#0EA5E9;stop-opacity:0.05" />
    </linearGradient>
  </defs>
  
  <rect width="900" height="400" fill="url(#techGrad)"/>
  
  <!-- Blockchain -->
  <g transform="translate(150, 80)">
    <rect x="-100" y="-40" width="200" height="280" rx="8" fill="white" stroke="#FF6B00" stroke-width="2"/>
    <text y="-10" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">Blockchain</text>
    
    <circle cx="0" cy="30" r="20" fill="#FF6B00"/>
    <text y="35" text-anchor="middle" font-size="10" fill="white" font-weight="bold">CTC</text>
    <text y="60" text-anchor="middle" font-size="12" fill="#666">Creditcoin EVM</text>
    <text y="75" text-anchor="middle" font-size="10" fill="#999">Chain ID: 1029</text>
    
    <rect x="-80" y="95" width="160" height="25" rx="4" fill="#FFF7ED"/>
    <text y="113" text-anchor="middle" font-size="10" fill="#666">Solidity ^0.8.20</text>
    
    <rect x="-80" y="130" width="160" height="25" rx="4" fill="#FFF7ED"/>
    <text y="148" text-anchor="middle" font-size="10" fill="#666">Hardhat + Foundry</text>
    
    <rect x="-80" y="165" width="160" height="25" rx="4" fill="#FFF7ED"/>
    <text y="183" text-anchor="middle" font-size="10" fill="#666">OpenZeppelin</text>
  </g>
  
  <!-- Frontend -->
  <g transform="translate(450, 80)">
    <rect x="-100" y="-40" width="200" height="280" rx="8" fill="white" stroke="#0EA5E9" stroke-width="2"/>
    <text y="-10" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">Frontend</text>
    
    <circle cx="0" cy="30" r="20" fill="#0EA5E9"/>
    <text y="35" text-anchor="middle" font-size="10" fill="white" font-weight="bold">UI</text>
    <text y="60" text-anchor="middle" font-size="12" fill="#666">Next.js 14</text>
    <text y="75" text-anchor="middle" font-size="10" fill="#999">App Router</text>
    
    <rect x="-80" y="95" width="160" height="25" rx="4" fill="#EFF6FF"/>
    <text y="113" text-anchor="middle" font-size="10" fill="#666">TypeScript</text>
    
    <rect x="-80" y="130" width="160" height="25" rx="4" fill="#EFF6FF"/>
    <text y="148" text-anchor="middle" font-size="10" fill="#666">Tailwind CSS</text>
    
    <rect x="-80" y="165" width="160" height="25" rx="4" fill="#EFF6FF"/>
    <text y="183" text-anchor="middle" font-size="10" fill="#666">wagmi + viem</text>
  </g>
  
  <!-- Gaming -->
  <g transform="translate(750, 80)">
    <rect x="-100" y="-40" width="200" height="280" rx="8" fill="white" stroke="#10B981" stroke-width="2"/>
    <text y="-10" text-anchor="middle" font-size="16" font-weight="bold" fill="#333">Gaming</text>
    
    <circle cx="0" cy="30" r="20" fill="#10B981"/>
    <text y="35" text-anchor="middle" font-size="10" fill="white" font-weight="bold">3D</text>
    <text y="60" text-anchor="middle" font-size="12" fill="#666">Phaser 3</text>
    <text y="75" text-anchor="middle" font-size="10" fill="#999">Game Engine</text>
    
    <rect x="-80" y="95" width="160" height="25" rx="4" fill="#ECFDF5"/>
    <text y="113" text-anchor="middle" font-size="10" fill="#666">Canvas Rendering</text>
    
    <rect x="-80" y="130" width="160" height="25" rx="4" fill="#ECFDF5"/>
    <text y="148" text-anchor="middle" font-size="10" fill="#666">Arcade Physics</text>
    
    <rect x="-80" y="165" width="160" height="25" rx="4" fill="#ECFDF5"/>
    <text y="183" text-anchor="middle" font-size="10" fill="#666">Howler.js Audio</text>
  </g>
</svg>

</div>

### Tech Stack Breakdown

**Blockchain Layer**
- Solidity ^0.8.20 for smart contracts
- Hardhat for deployment and scripting
- Foundry for testing and gas optimization
- OpenZeppelin for security primitives
- Creditcoin EVM Testnet (Chain ID: 1029)

**Frontend Layer**
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- wagmi v2 for Web3 hooks
- viem for Ethereum interactions
- TanStack Query for data fetching
- Zustand for state management

**Game Engine Layer**
- Phaser 3 for browser games
- Canvas API for rendering
- Arcade physics engine
- Howler.js for audio
- Custom anti-cheat system

**Development Tools**
- pnpm for monorepo management
- Biome for fast linting
- Husky for git hooks
- GitHub Actions for CI/CD
- Vercel for deployment

---

## Quick Start

### Prerequisites

```bash
# Required Software
Node.js >= 18.0.0
pnpm >= 8.0.0
Foundry (latest)
MetaMask browser extension
```

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/Tasfia-17/CREDIQUEST.git
cd CREDIQUEST

# 2. Install all dependencies
pnpm install

# 3. Setup environment files
cp packages/contracts/.env.example packages/contracts/.env
cp packages/frontend/.env.example packages/frontend/.env

# 4. Configure MetaMask
# Network Name: Creditcoin Testnet
# RPC URL: https://rpc.cc3-testnet.creditcoin.network
# Chain ID: 1029
# Currency Symbol: CTC
# Block Explorer: https://creditcoin-testnet.blockscout.com

# 5. Get testnet CTC from faucet
# Visit faucet and enter your wallet address
```

### Development Workflow

```bash
# Terminal 1: Build and test contracts
cd packages/contracts
forge build
forge test -vvv

# Terminal 2: Run frontend development server
cd packages/frontend
pnpm dev

# Terminal 3: Build game engine (optional)
cd packages/game-engine
pnpm build
```

Visit http://localhost:3000 to see the application

### Deployment to Testnet

```bash
# 1. Add your private key to packages/contracts/.env
PRIVATE_KEY=your_private_key_without_0x

# 2. Deploy all contracts
cd packages/contracts
pnpm deploy:testnet

# 3. Copy deployed addresses to packages/frontend/.env
NEXT_PUBLIC_ROSCA_CORE_ADDRESS=0x...
NEXT_PUBLIC_CREDISCORE_ADDRESS=0x...
NEXT_PUBLIC_TOURNAMENT_ARENA_ADDRESS=0x...

# 4. Rebuild and deploy frontend
cd packages/frontend
pnpm build
# Deploy to Vercel or your preferred hosting
```

---

## Project Structure

```
crediquest/
├── packages/
│   ├── contracts/              # Smart contracts
│   │   ├── src/
│   │   │   ├── RoscaCore.sol          # Circle management
│   │   │   ├── CrediScore.sol         # Reputation system
│   │   │   └── TournamentArena.sol    # Tournament logic
│   │   ├── script/
│   │   │   └── deploy.js              # Deployment scripts
│   │   ├── test/                      # Foundry tests
│   │   ├── hardhat.config.js          # Hardhat configuration
│   │   └── foundry.toml               # Foundry configuration
│   │
│   ├── frontend/               # Next.js application
│   │   ├── app/
│   │   │   ├── page.tsx               # Landing page
│   │   │   ├── layout.tsx             # Root layout
│   │   │   ├── circles/               # ROSCA pages
│   │   │   ├── tournaments/           # Tournament pages
│   │   │   └── profile/               # User profile
│   │   ├── components/
│   │   │   └── ConnectButton.tsx      # Wallet connector
│   │   ├── lib/
│   │   │   ├── abis.ts                # Contract ABIs
│   │   │   ├── wagmi.ts               # Web3 config
│   │   │   └── chains.ts              # Chain definitions
│   │   └── public/                    # Static assets
│   │
│   ├── game-engine/            # Phaser 3 games
│   │   └── src/
│   │       ├── games/
│   │       │   ├── CreditDash.ts      # Reaction game
│   │       │   └── MemoryVault.ts     # Memory game
│   │       └── index.ts               # Exports
│   │
│   └── shared-types/           # Shared TypeScript types
│
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI
│
├── docs/
│   ├── ARCHITECTURE.md         # Technical architecture
│   ├── SETUP.md                # Detailed setup guide
│   └── DEMO_SCRIPT.md          # Demo preparation
│
├── pnpm-workspace.yaml         # Workspace configuration
├── package.json                # Root package file
├── biome.json                  # Linter configuration
├── .cursorrules                # AI coding guidelines
└── README.md                   # This file
```

---

## Deployment

<div align="center">

<svg width="800" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="deployGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#FF6B00;stop-opacity:0.1" />
      <stop offset="100%" style="stop-color:#10B981;stop-opacity:0.1" />
    </linearGradient>
    <marker id="deployArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <polygon points="0 0, 10 3, 0 6" fill="#666" />
    </marker>
  </defs>
  
  <rect width="800" height="300" fill="url(#deployGrad)"/>
  
  <!-- Step 1 -->
  <g transform="translate(100, 150)">
    <circle r="40" fill="#FF6B00"/>
    <text y="5" text-anchor="middle" font-size="24" fill="white" font-weight="bold">1</text>
    <text y="70" text-anchor="middle" font-size="12" fill="#333">Deploy</text>
    <text y="85" text-anchor="middle" font-size="12" fill="#333">Contracts</text>
  </g>
  
  <line x1="150" y1="150" x2="230" y2="150" stroke="#666" stroke-width="2" marker-end="url(#deployArrow)"/>
  
  <!-- Step 2 -->
  <g transform="translate(280, 150)">
    <circle r="40" fill="#0EA5E9"/>
    <text y="5" text-anchor="middle" font-size="24" fill="white" font-weight="bold">2</text>
    <text y="70" text-anchor="middle" font-size="12" fill="#333">Verify on</text>
    <text y="85" text-anchor="middle" font-size="12" fill="#333">Explorer</text>
  </g>
  
  <line x1="330" y1="150" x2="410" y2="150" stroke="#666" stroke-width="2" marker-end="url(#deployArrow)"/>
  
  <!-- Step 3 -->
  <g transform="translate(460, 150)">
    <circle r="40" fill="#8B5CF6"/>
    <text y="5" text-anchor="middle" font-size="24" fill="white" font-weight="bold">3</text>
    <text y="70" text-anchor="middle" font-size="12" fill="#333">Update</text>
    <text y="85" text-anchor="middle" font-size="12" fill="#333">Frontend</text>
  </g>
  
  <line x1="510" y1="150" x2="590" y2="150" stroke="#666" stroke-width="2" marker-end="url(#deployArrow)"/>
  
  <!-- Step 4 -->
  <g transform="translate(640, 150)">
    <circle r="40" fill="#10B981"/>
    <text y="5" text-anchor="middle" font-size="24" fill="white" font-weight="bold">4</text>
    <text y="70" text-anchor="middle" font-size="12" fill="#333">Deploy to</text>
    <text y="85" text-anchor="middle" font-size="12" fill="#333">Vercel</text>
  </g>
</svg>

</div>

### Deployed Contracts (Testnet)

| Contract | Address | Explorer |
|----------|---------|----------|
| RoscaCore | `TBD` | [View on Explorer](https://creditcoin-testnet.blockscout.com) |
| CrediScore | `TBD` | [View on Explorer](https://creditcoin-testnet.blockscout.com) |
| TournamentArena | `TBD` | [View on Explorer](https://creditcoin-testnet.blockscout.com) |

### Frontend Deployment

The frontend is deployed on Vercel for optimal performance:

- Production URL: TBD
- Preview Deployments: Automatic on PR
- Environment: Creditcoin Testnet

---

## Demo

<div align="center">

<svg width="800" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="demoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B00;stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:#FF6B00;stop-opacity:0.05" />
    </linearGradient>
  </defs>
  
  <rect width="800" height="200" fill="url(#demoGrad)"/>
  
  <!-- Video Icon -->
  <g transform="translate(150, 100)">
    <rect x="-50" y="-30" width="100" height="60" rx="8" fill="#FF6B00"/>
    <polygon points="-15,-10 -15,10 15,0" fill="white"/>
    <text y="50" text-anchor="middle" font-size="14" fill="#333">Demo Video</text>
  </g>
  
  <!-- Live Demo Icon -->
  <g transform="translate(400, 100)">
    <circle r="35" fill="#0EA5E9"/>
    <circle r="20" fill="white"/>
    <circle r="10" fill="#0EA5E9"/>
    <text y="50" text-anchor="middle" font-size="14" fill="#333">Live Demo</text>
  </g>
  
  <!-- Docs Icon -->
  <g transform="translate(650, 100)">
    <rect x="-30" y="-35" width="60" height="70" rx="4" fill="#10B981"/>
    <line x1="-20" y1="-20" x2="20" y2="-20" stroke="white" stroke-width="2"/>
    <line x1="-20" y1="-5" x2="20" y2="-5" stroke="white" stroke-width="2"/>
    <line x1="-20" y1="10" x2="10" y2="10" stroke="white" stroke-width="2"/>
    <text y="50" text-anchor="middle" font-size="14" fill="#333">Documentation</text>
  </g>
</svg>

</div>

### Resources

- **Demo Video**: [Watch on YouTube](https://youtube.com/...)
- **Live Application**: [Try CrediQuest](https://crediquest.vercel.app)
- **Pitch Deck**: [View Slides](./docs/pitch-deck.pdf)
- **Architecture Docs**: [Read Technical Details](./ARCHITECTURE.md)
- **Setup Guide**: [Installation Instructions](./SETUP.md)

### Demo Highlights

The 3-minute demo video showcases:
- Creating a savings circle with custom parameters
- Joining a tournament and playing Credit Dash
- Viewing credit score dashboard with tier progression
- Smart contract interactions on Creditcoin testnet
- Real-time updates and Web3 wallet integration

---

## Roadmap

<div align="center">

<svg width="900" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="roadmapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#FF6B00;stop-opacity:0.1" />
      <stop offset="50%" style="stop-color:#0EA5E9;stop-opacity:0.1" />
      <stop offset="100%" style="stop-color:#10B981;stop-opacity:0.1" />
    </linearGradient>
  </defs>
  
  <rect width="900" height="400" fill="url(#roadmapGrad)"/>
  
  <!-- Timeline -->
  <line x1="100" y1="200" x2="800" y2="200" stroke="#666" stroke-width="3"/>
  
  <!-- Q2 2026 -->
  <g transform="translate(150, 200)">
    <circle r="15" fill="#10B981"/>
    <text y="5" text-anchor="middle" font-size="12" fill="white" font-weight="bold">✓</text>
    <text y="-30" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Q2 2026</text>
    <text y="50" text-anchor="middle" font-size="11" fill="#666">MVP Launch</text>
    <text y="65" text-anchor="middle" font-size="10" fill="#999">Testnet deployment</text>
    <text y="80" text-anchor="middle" font-size="10" fill="#999">3 contracts</text>
    <text y="95" text-anchor="middle" font-size="10" fill="#999">2 games</text>
  </g>
  
  <!-- Q3 2026 -->
  <g transform="translate(350, 200)">
    <circle r="15" fill="#0EA5E9"/>
    <text y="5" text-anchor="middle" font-size="12" fill="white" font-weight="bold">2</text>
    <text y="-30" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Q3 2026</text>
    <text y="50" text-anchor="middle" font-size="11" fill="#666">Enhancement</text>
    <text y="65" text-anchor="middle" font-size="10" fill="#999">Mobile app</text>
    <text y="80" text-anchor="middle" font-size="10" fill="#999">Guild system</text>
    <text y="95" text-anchor="middle" font-size="10" fill="#999">More games</text>
  </g>
  
  <!-- Q4 2026 -->
  <g transform="translate(550, 200)">
    <circle r="15" fill="#8B5CF6"/>
    <text y="5" text-anchor="middle" font-size="12" fill="white" font-weight="bold">3</text>
    <text y="-30" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Q4 2026</text>
    <text y="50" text-anchor="middle" font-size="11" fill="#666">Mainnet Prep</text>
    <text y="65" text-anchor="middle" font-size="10" fill="#999">Security audit</text>
    <text y="80" text-anchor="middle" font-size="10" fill="#999">Oracle integration</text>
    <text y="95" text-anchor="middle" font-size="10" fill="#999">Partner onboarding</text>
  </g>
  
  <!-- Q1 2027 -->
  <g transform="translate(750, 200)">
    <circle r="15" fill="#FF6B00"/>
    <text y="5" text-anchor="middle" font-size="12" fill="white" font-weight="bold">4</text>
    <text y="-30" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Q1 2027</text>
    <text y="50" text-anchor="middle" font-size="11" fill="#666">Mainnet Launch</text>
    <text y="65" text-anchor="middle" font-size="10" fill="#999">Production deployment</text>
    <text y="80" text-anchor="middle" font-size="10" fill="#999">DeFi partnerships</text>
    <text y="95" text-anchor="middle" font-size="10" fill="#999">Real-world loans</text>
  </g>
</svg>

</div>

### Development Phases

**Phase 1: MVP (Q2 2026)** - Current
- Core ROSCA mechanics implemented
- Basic credit scoring system
- 2 skill-based minigames
- Creditcoin testnet deployment
- Web application with Web3 integration

**Phase 2: Enhancement (Q3 2026)**
- Mobile application (React Native)
- Guild system for team play
- Additional minigames (5+ total)
- Advanced tournament formats
- Subgraph for efficient querying
- Social features and referrals

**Phase 3: Mainnet Preparation (Q4 2026)**
- Comprehensive security audit (CertiK/OpenZeppelin)
- Creditcoin Oracle integration
- Partner protocol integrations
- Legal compliance review
- Insurance coverage
- Stress testing and optimization

**Phase 4: Production Launch (Q1 2027)**
- Creditcoin mainnet deployment
- DeFi lending partnerships
- Microfinance institution integration
- Real-world credit score bridging
- Marketing and user acquisition
- Community governance (DAO)

---

## Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

- Report bugs and issues
- Suggest new features
- Improve documentation
- Submit pull requests
- Test on different devices
- Spread the word

### Development Process

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes
# 4. Run tests
pnpm test

# 5. Commit with conventional commits
git commit -m "feat: add new feature"

# 6. Push and create PR
git push origin feature/your-feature-name
```

### Code Standards

- Follow existing code style
- Write tests for new features
- Update documentation
- Use TypeScript for type safety
- Follow Solidity best practices

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

<div align="center">

<svg width="800" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="thanksGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B00;stop-opacity:0.1" />
      <stop offset="100%" style="stop-color:#10B981;stop-opacity:0.1" />
    </linearGradient>
  </defs>
  
  <rect width="800" height="200" fill="url(#thanksGrad)"/>
  
  <text x="400" y="60" text-anchor="middle" font-size="24" font-weight="bold" fill="#333">Built With Inspiration From</text>
  
  <text x="200" y="110" text-anchor="middle" font-size="14" fill="#666">Xitique Onchain</text>
  <text x="200" y="130" text-anchor="middle" font-size="11" fill="#999">ROSCA mechanics</text>
  
  <text x="400" y="110" text-anchor="middle" font-size="14" fill="#666">Loot Survivor</text>
  <text x="400" y="130" text-anchor="middle" font-size="11" fill="#999">Tournament economics</text>
  
  <text x="600" y="110" text-anchor="middle" font-size="14" fill="#666">Guild.xyz</text>
  <text x="600" y="130" text-anchor="middle" font-size="11" fill="#999">Membership patterns</text>
  
  <text x="400" y="170" text-anchor="middle" font-size="16" font-weight="bold" fill="#FF6B00">Special Thanks to Creditcoin for EVM Infrastructure</text>
</svg>

</div>

- **Xitique Onchain**: ROSCA contract patterns and mechanics
- **Loot Survivor**: Sustainable tournament economics model
- **Guild.xyz**: Membership and reputation systems
- **Creditcoin**: EVM infrastructure and credit mission alignment
- **OpenZeppelin**: Security-audited smart contract libraries

---

## Contact

<div align="center">

<p>
  <strong>Team CrediQuest</strong>
</p>

<p>
  <a href="https://github.com/Tasfia-17/CREDIQUEST">GitHub Repository</a> •
  <a href="https://twitter.com/crediquest">Twitter</a> •
  <a href="https://discord.gg/crediquest">Discord</a> •
  <a href="mailto:team@crediquest.io">Email</a>
</p>

<p>
  <strong>Built for BUIDL CTC Hackathon 2026</strong>
</p>

<!-- Final Logo -->
<svg width="300" height="80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="finalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF6B00;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF8C42;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <ellipse cx="40" cy="50" rx="25" ry="7" fill="url(#finalGrad)" opacity="0.3"/>
  <ellipse cx="40" cy="43" rx="25" ry="7" fill="url(#finalGrad)" opacity="0.5"/>
  <ellipse cx="40" cy="36" rx="25" ry="7" fill="url(#finalGrad)"/>
  <path d="M 15 36 L 15 50 Q 15 54 40 54 Q 65 54 65 50 L 65 36" fill="url(#finalGrad)" opacity="0.8"/>
  
  <text x="90" y="45" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="url(#finalGrad)">CrediQuest</text>
  <text x="90" y="60" font-family="Arial, sans-serif" font-size="10" fill="#888">Play. Save. Build Credit.</text>
</svg>

</div>

---

<div align="center">
  <p>Made with care for financial inclusion</p>
  <p>Copyright 2026 CrediQuest Team</p>
</div>

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
