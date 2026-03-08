export { initCreditDash, CreditDashGame } from './games/CreditDash';
export { initMemoryVault, MemoryVaultGame } from './games/MemoryVault';

export interface GameResult {
  score: number;
  proof: string;
}

export enum GameType {
  CreditDash = 0,
  MemoryVault = 1,
  MarketMaker = 2
}
