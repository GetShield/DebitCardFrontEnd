'use client';

import { Session } from 'next-auth';
import { useState } from 'react';

import { QR } from '@/components';
import { cn, formatNetwork } from '@/lib';

import { UserWallet, Wallet } from '..';

interface Props {
  wallets: Wallet[];
  userWallets: UserWallet[];
  session: Session | null;
}

const Wallets: React.FC<Props> = ({ wallets, userWallets, session }) => {
  const [reload, setReload] = useState('');

  const currentShieldWallet = wallets.find(
    (wallet) => wallet.blockchains[0].chain === reload
  );

  const userWallet = userWallets.find((wallet) =>
    wallet.blockchains.find((blockchain) => blockchain.chain === reload)
  );

  const walletsLength = wallets.length;

  if (!walletsLength)
    return <p className='text-xs text-muted-foreground'>No networks found</p>;

  return (
    <div className='flex w-full flex-col gap-8'>
      <div
        className={cn(
          'flex w-full items-center divide-muted-foreground/50 overflow-auto rounded-3xl border border-muted-foreground/50',
          {
            'flex-wrap divide-y': walletsLength > 3,
            'divide-x': walletsLength < 4,
          }
        )}
      >
        {wallets.map((wallet, index) => {
          return (
            <button
              key={index}
              className={cn(
                'flex w-full min-w-24 select-none items-center justify-center px-6 py-1.5 text-center font-medium text-foreground hover:bg-muted-foreground/10 active:bg-muted-foreground/20',
                {
                  'bg-muted-foreground/10':
                    reload === wallet.blockchains[0].chain,
                }
              )}
              onClick={() => setReload(wallet.blockchains[0].chain)}
            >
              {formatNetwork(wallet.blockchains[0].chain)}
            </button>
          );
        })}
      </div>
      {/* <CoinsAccepted acceptedCoins={walletSelected.acceptedCoins} /> */}
      <QR
        userWallet={userWallet}
        currentShieldWallet={currentShieldWallet}
        session={session}
      />
    </div>
  );
};

export default Wallets;
