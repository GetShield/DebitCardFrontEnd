export interface Wallet {
  _id: string;
  date: string;
  address: string;
  blockchains: WalletBlockchain[];
  user: string;
  __v: number;
}

export interface WalletBlockchain {
  _id: string;
  mainnet: boolean;
  chainType: string;
  name: string;
  native_symbol: string;
  description: string;
  wallets: string[];
  chainId?: number;
}

export interface UserWallet {
  _id: string;
  date: string;
  address: string;
  blockchains: Blockchain[];
  user: string;
  __v: number;
}

export interface Blockchain {
  _id: string;
  mainnet: boolean;
  chainType: string;
  name: string;
  native_symbol: string;
  wallets: string[];
  chainId?: number;
}

export interface Price {
  name: string;
  price: number;
}
