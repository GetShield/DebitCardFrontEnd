export const Coins = {
  BTC: 'BTC',
  ETH: 'ETH',
  TRX: 'TRX',
  USD: 'USD',
  USDC: 'USDC',
  USDT: 'USDT',
} as const;

export type Coins = (typeof Coins)[keyof typeof Coins];

export interface Balance {
  _id: string;
  wallet: Wallet;
  blockchain: Blockchain;
  currency: string;
  __v: number;
  amount: number;
}

export interface Blockchain {
  _id: string;
  chain: string;
  chainId: number;
  nativeSymbol: string;
  chainType: string;
  wallets: string[];
  __v: number;
}

export interface Wallet {
  _id: string;
  address: string;
  blockchains: string[];
  user: string;
  date: string;
  __v: number;
}
