'use client';

import { QR } from '@/components';
import { cn } from '@/lib';
import { usePathname, useRouter } from 'next/navigation';
import { format } from 'url';
import { UserWallet, Wallet } from '..';

interface Props {
  reload: string;
  wallets: Wallet[];
  userWallets: UserWallet[];
}

const Wallets: React.FC<Props> = ({ wallets, reload, userWallets }) => {
  const router = useRouter();

  const currentShieldWallet = wallets.find(
    (wallet) => wallet.blockchains[0].name === reload
  );

  const userHasWallet = userWallets.find((wallet) =>
    wallet.blockchains.find((blockchain) => blockchain.name === reload)
  );

  const pathname = usePathname();

  const handleWalletSelected = (name: string) => {
    const url = format({
      pathname: pathname,
      query: { reload: name },
    });
    router.replace(url, { scroll: false });
  };

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-wrap items-center divide-y divide-muted-foreground/50 overflow-auto rounded-3xl border border-muted-foreground/50'>
        {wallets.map((wallet, index) => {
          return (
            <button
              key={index}
              className={cn(
                'flex w-full min-w-24 items-center justify-center px-6 py-1.5 text-center font-medium text-foreground hover:bg-muted-foreground/10 active:bg-muted-foreground/20',
                {
                  'bg-muted-foreground/10':
                    reload === wallet.blockchains[0].name,
                }
              )}
              onClick={() => handleWalletSelected(wallet.blockchains[0].name)}
            >
              {wallet.blockchains[0].description}
            </button>
          );
        })}
      </div>
      {/* <CoinsAccepted acceptedCoins={walletSelected.acceptedCoins} /> */}
      <QR
        value={currentShieldWallet?.address}
        userHasWallet={!!userHasWallet}
        walletName={currentShieldWallet?.blockchains[0].description}
      />
    </div>
  );
};

export default Wallets;
