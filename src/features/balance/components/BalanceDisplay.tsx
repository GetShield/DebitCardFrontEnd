'use client';

import { Session } from 'next-auth';

import { BtcIcon, EthIcon, TronIcon, USIcon } from '@/assets';
import { Price } from '@/features/wallets';
import { findPrice, formatCrypto, formatNetwork, fromatCurrency } from '@/lib';

import { Balance } from '../types';

interface Props {
  prices: Price[];
  initialBalances: Balance[];
  session: Session | null;
}

const BalanceDisplay: React.FC<Props> = ({
  prices,
  initialBalances,
  session,
}) => {
  const balances = initialBalances;

  const COINS = [
    { name: 'BTC', largeName: 'Bitcoin', icon: <BtcIcon /> },
    { name: 'ETH', largeName: 'Ethereum', icon: <EthIcon /> },
    { name: 'TRX', largeName: 'Tron', icon: <TronIcon /> },
  ];

  const totalBalance = balances?.reduce((acc, balance) => {
    const price = findPrice(balance.blockchain.nativeSymbol, prices);
    return acc + balance.amount * price;
  }, 0);

  const totalBalanceFormatted = fromatCurrency(totalBalance);

  return (
    <div className='flex w-full flex-col py-6 text-muted-foreground'>
      <span>Your balance</span>
      <span className='select-none text-xs'>
        Balances are updated every 5 minutes
      </span>
      <div className='mb-5 mt-2 flex items-center gap-5'>
        <USIcon className='scale-[2.0]' />
        <span className='text-3xl font-extrabold text-foreground'>
          {totalBalanceFormatted}
        </span>
      </div>
      <div className='flex flex-col gap-3 text-sm sm:text-base'>
        {balances.map((balance) => {
          const coin = COINS.find(
            (coin) => coin.name === balance.blockchain.nativeSymbol
          );
          const price = findPrice(balance.blockchain.nativeSymbol, prices);
          return (
            <div
              key={balance._id}
              className='flex items-center justify-between gap-2'
            >
              {balance.blockchain.chain}
              <div className='flex items-center gap-1'>
                <div>{coin?.icon}</div>
                <div className='flex flex-wrap gap-1 font-bold text-foreground'>
                  <span>{formatCrypto(balance.amount, 6)}</span>{' '}
                  <span>{formatNetwork(balance.blockchain.chain)}</span> |{' '}
                  <span>USD {fromatCurrency(balance.amount * price, 2)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BalanceDisplay;
