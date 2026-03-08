import { defineChain } from 'viem';

export const creditcoinTestnet = defineChain({
  id: 1029,
  name: 'Creditcoin Testnet',
  network: 'creditcoin-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Creditcoin',
    symbol: 'CTC',
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_CREDITCOIN_RPC || 'https://rpc.cc3-testnet.creditcoin.network'],
    },
    public: {
      http: ['https://rpc.cc3-testnet.creditcoin.network'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://creditcoin-testnet.blockscout.com' },
  },
  testnet: true,
});
