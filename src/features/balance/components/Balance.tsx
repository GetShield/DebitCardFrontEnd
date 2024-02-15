'use client';

import { BtcIcon, EthIcon, USIcon, UsdtIcon } from '@/assets';
import { useState } from 'react';
import { Coins } from '../types';

interface Props {}

const Balance: React.FC<Props> = () => {
  const [balanceSelected, setBalanceSelected] = useState(Coins.BTC);

  const COINS = [
    { name: 'BTC', largeName: 'Bitcoin', icon: <BtcIcon /> },
    { name: 'ETH', largeName: 'Ethereum', icon: <EthIcon /> },
    { name: 'USDT', largeName: 'Tron', icon: <UsdtIcon /> },
  ];

  const FAKE_BALANCES = {
    BTC: 2.058,
    ETH: 0,
    USDT: 2300,
  };

  return (
    <div className='w-full py-6 text-muted-foreground'>
      <span>You balance</span>
      <div className='mb-5 mt-2 flex items-center gap-5'>
        <USIcon className='scale-[2.0]' />
        <span className='text-3xl font-extrabold text-foreground'>
          $47,642.00
        </span>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          <span>Total Balance (BTC & USDT)</span>
          <div className='flex items-center gap-1'>
            <USIcon />
            <span className='font-bold text-foreground'>$47,642.20</span>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <span>BTC Token Balance</span>
          <div className='flex items-center gap-1'>
            <BtcIcon />
            <span className='font-bold text-foreground'>$2.058 BTC</span>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <span>USDT Token Balance</span>
          <div className='flex items-center gap-1'>
            <UsdtIcon />
            <span className='font-bold text-foreground'>$2,300 USDT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
