export const Coins = {
  BTC: 'BTC',
  ETH: 'ETH',
  USDT: 'USDT',
  USD: 'USD',
} as const;

export type Coins = (typeof Coins)[keyof typeof Coins];
