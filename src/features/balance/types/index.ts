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
  blockchain: Blockchain;
  crypto: string;
  wallet: Wallet;
  __v: number;
  amount: number;
}

export interface Blockchain {
  _id: string;
  mainnet: boolean;
  chainType: string;
  name: string;
  native_symbol: string;
  description: string;
  wallets: string[];
  chainId?: number;
}

export interface Wallet {
  _id: string;
  date: string;
  address: string;
  blockchains: string[];
  user: string;
  __v: number;
}
