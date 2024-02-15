'use client';

import { useState } from 'react';
import { CoinSelected } from '.';

interface Props {}

const Reload: React.FC<Props> = () => {
  const [selectedCoin, setSelectedCoin] = useState('BTC');

  const COINS = [
    { name: 'BTC', largeName: 'Bitcoin' },
    { name: 'ETH', largeName: 'Ethereum' },
    { name: 'USDT', largeName: 'Tron' },
  ];

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center divide-x divide-muted-foreground/50 overflow-auto rounded-3xl border border-muted-foreground/50'>
        {COINS.map((coin, index) => {
          return (
            <button
              key={index}
              className='flex min-w-24 items-center justify-center px-6 py-1.5 text-center font-medium text-foreground hover:bg-muted-foreground/10 active:bg-muted-foreground/20'
              onClick={() => setSelectedCoin(coin.name)}
            >
              {coin.largeName}
            </button>
          );
        })}
      </div>
      <CoinSelected selectedCoin={selectedCoin} />
    </div>
  );
};

export default Reload;
