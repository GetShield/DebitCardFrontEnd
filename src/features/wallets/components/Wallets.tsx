'use client';

import { QR } from '@/components';
import { cn } from '@/lib';
import { Session } from 'next-auth';
import { useState } from 'react';
import { UserWallet, Wallet } from '..';

interface Props {
  wallets: Wallet[];
  userWallets: UserWallet[];
  session: Session | null;
}

const Wallets: React.FC<Props> = ({ wallets, userWallets, session }) => {
  const [reload, setReload] = useState('');

  const currentShieldWallet = wallets.find(
    (wallet) => wallet.blockchains[0].name === reload
  );

  const userHasWallet = userWallets.find((wallet) =>
    wallet.blockchains.find((blockchain) => blockchain.name === reload)
  );

  return (
    <div className='flex w-full flex-col gap-8'>
      <div className='flex w-full flex-wrap items-center divide-y divide-muted-foreground/50 overflow-auto rounded-3xl border border-muted-foreground/50'>
        {wallets.map((wallet, index) => {
          return (
            <button
              key={index}
              className={cn(
                'flex w-full min-w-24 select-none items-center justify-center px-6 py-1.5 text-center font-medium text-foreground hover:bg-muted-foreground/10 active:bg-muted-foreground/20',
                {
                  'bg-muted-foreground/10':
                    reload === wallet.blockchains[0].name,
                }
              )}
              onClick={() => setReload(wallet.blockchains[0].name)}
            >
              {wallet.blockchains[0].description}
            </button>
          );
        })}
      </div>
      {/* <CoinsAccepted acceptedCoins={walletSelected.acceptedCoins} /> */}
      <QR
        userHasWallet={!!userHasWallet}
        currentShieldWallet={currentShieldWallet}
        session={session}
      />
    </div>
  );
};

export default Wallets;
