'use client';

import { Copy } from 'lucide-react';
import { Session } from 'next-auth';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import { toast } from 'sonner';

import { UserWallet, Wallet, WalletForm } from '@/features/wallets';
import { formatNetwork } from '@/lib';
import { Button } from '.';

interface Props {
  userWallet: UserWallet | undefined;
  currentShieldWallet: Wallet | undefined;
  session: Session | null;
}

const QR: React.FC<Props> = ({ userWallet, currentShieldWallet, session }) => {
  const [registerWallet, setRegisterWallet] = useState<null | string>(null);

  const userHasWallet = !!userWallet;
  const value = currentShieldWallet?.address;
  const walletName = currentShieldWallet?.blockchains[0].chain;
  const walletDescription = currentShieldWallet?.blockchains[0].chain;

  if (!value) {
    return null;
  }

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success('Address copied to clipboard');
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  return (
    <div className=''>
      {registerWallet && (
        <WalletForm
          session={session}
          onClose={() => setRegisterWallet(null)}
          blockchain={registerWallet}
        />
      )}
      {userHasWallet && (
        <div className='mx-auto mb-4 flex w-full flex-col gap-x-2 text-sm'>
          <span className='font-semibold'>Send From:</span>
          <span className='mx-auto flex w-fit text-xs font-medium text-green-500'>
            {userWallet?.address}
          </span>
        </div>
      )}
      <div className='relative m-auto flex max-w-[340px] rounded-md bg-muted p-8'>
        {!userHasWallet && (
          <div className='absolute left-1/2 top-1/2 flex translate-x-[-50%] translate-y-[-50%] select-none rounded-sm bg-secondary p-1 text-center text-xs font-medium leading-5 text-red-500'>
            You need to provide us your {formatNetwork(walletDescription)}{' '}
            Wallet of origin first.
          </div>
        )}
        <QRCode
          size={256}
          className='h-auto w-full max-w-full'
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
      {userHasWallet && (
        <div className='mx-auto mt-4 flex w-auto max-w-[340px] flex-wrap gap-x-2 text-sm'>
          <span className='font-semibold'>Send To:</span>
          <div
            className='mx-auto flex cursor-pointer items-center gap-2 overflow-hidden rounded-3xl border border-gray-500/50 px-4 py-2 text-xs hover:bg-muted-foreground/10 active:bg-muted-foreground/20'
            onClick={copyCode}
          >
            <span className='w-full overflow-hidden text-ellipsis'>
              {value}
            </span>
            <Copy className='ml-auto h-3 text-foreground' />
          </div>
        </div>
      )}
      {!userHasWallet && (
        <Button
          className='mx-auto my-4 flex px-10 py-2.5'
          onClick={() => setRegisterWallet(walletName || '')}
        >
          Register my {formatNetwork(walletDescription)} address
        </Button>
      )}
    </div>
  );
};

export default QR;
