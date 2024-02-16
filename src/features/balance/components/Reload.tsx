'use client';

import { QR } from '@/components';
import { WALLETS } from '@/data';
import { cn } from '@/lib';
import { useState } from 'react';

interface Props {}

const Reload: React.FC<Props> = () => {
  const [walletSelected, setWalletSelected] = useState(WALLETS[0]);

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center divide-x divide-muted-foreground/50 overflow-auto rounded-3xl border border-muted-foreground/50'>
        {WALLETS.map((wallet, index) => {
          return (
            <button
              key={index}
              className={cn(
                'flex min-w-24 items-center justify-center px-6 py-1.5 text-center font-medium text-foreground hover:bg-muted-foreground/10 active:bg-muted-foreground/20',
                {
                  'bg-muted-foreground/10': walletSelected.coin === wallet.coin,
                }
              )}
              onClick={() => setWalletSelected(wallet)}
            >
              {wallet.name}
            </button>
          );
        })}
      </div>
      {/* <CoinsAccepted acceptedCoins={walletSelected.acceptedCoins} /> */}
      <QR value={walletSelected.address} />
    </div>
  );
};

export default Reload;
