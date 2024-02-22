export const Coins = {
  BTC: 'BTC',
  ETH: 'ETH',
  TRX: 'TRX',
  USD: 'USD',
  USDC: 'USDC',
  USDT: 'USDT',
} as const;

export type Coins = (typeof Coins)[keyof typeof Coins];

export interface Wallet {
  coin: Coins;
  name: string;
  address: string;
  acceptedCoins: Coins[];
}

// TODO: complete
export interface Balance {
  _id: string;
  date: string;
  amount: number;
  crypto: string;
  wallet: string;
  blockchain: string;
}
