import { Coins } from '@/features/balance';

// TODO: to be removed when wallets endpoint is ready
export const WALLETS: any[] = [
  {
    coin: Coins.BTC,
    name: 'Bitcoin',
    address: '32KjG6o7TFcYyvHWADpg1m4JoXU4P5QN1L',
    acceptedCoins: [Coins.BTC],
  },
  {
    coin: Coins.ETH,
    name: 'Ethereum',
    address: '0x9e75e5185c7bd59f04147a28e3e663df674da2a0',
    acceptedCoins: [Coins.ETH, Coins.USDT, Coins.USDC],
  },
  {
    coin: Coins.TRX,
    name: 'Tron',
    address: 'TWNxsGw1o4rnP4FExQSEXuYzLtXm3dMkRd',
    acceptedCoins: [Coins.TRX, Coins.USDT],
  },
];
