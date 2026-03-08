# Vercel Deployment Guide

## Quick Deploy

1. Push code to GitHub (already done)
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repository: `Tasfia-17/CREDIQUEST`
5. Vercel will auto-detect Next.js
6. Click "Deploy"

## Environment Variables

Add these in Vercel dashboard under Settings > Environment Variables:

```
NEXT_PUBLIC_CREDITCOIN_RPC=https://rpc.cc3-testnet.creditcoin.network
NEXT_PUBLIC_CHAIN_ID=1029
NEXT_PUBLIC_ROSCA_CORE_ADDRESS=your_deployed_address
NEXT_PUBLIC_CREDISCORE_ADDRESS=your_deployed_address
NEXT_PUBLIC_TOURNAMENT_ARENA_ADDRESS=your_deployed_address
```

## Build Settings

Vercel will automatically use:
- Framework: Next.js
- Build Command: `cd packages/frontend && pnpm build`
- Output Directory: `packages/frontend/.next`
- Install Command: `pnpm install`

## After Deployment

Your app will be live at: `https://your-project.vercel.app`

You can also add a custom domain in Vercel settings.
