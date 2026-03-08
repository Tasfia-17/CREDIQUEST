import { http, createConfig } from 'wagmi';
import { creditcoinTestnet } from './chains';

export const config = createConfig({
  chains: [creditcoinTestnet],
  transports: {
    [creditcoinTestnet.id]: http(),
  },
});
