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
  chain: string;
  chainId?: number;
  nativeSymbol: string;
  chainType: string;
  wallets: string[];
  __v: number;
}

export interface UserWallet {
  _id: string;
  address: string;
  blockchains: Blockchain[];
  user: string;
  date: string;
  __v: number;
}

export interface Blockchain {
  _id: string;
  chain: string;
  nativeSymbol: string;
  chainType: string;
  wallets: string[];
  __v: number;
}

export interface Price {
  name: string;
  price: number;
}
