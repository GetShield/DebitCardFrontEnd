'use client';

import { Copy } from 'lucide-react';
import QRCode from 'react-qr-code';
import { toast } from 'sonner';

interface Props {
  userHasWallet: boolean;
  value: string | undefined;
  walletName: string | undefined;
}

const QR: React.FC<Props> = ({ value, userHasWallet, walletName }) => {
  if (!value) {
    return null;
  }

  const copyCode = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast.success('Address copied to clipboard');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className='relative'>
      <div className='m-auto flex max-w-[340px] rounded-md bg-muted p-8'>
        {!userHasWallet && (
          <div className='absolute left-1/2 top-1/2 flex translate-x-[-50%] translate-y-[-50%] select-none rounded-sm bg-secondary p-1 text-center text-sm leading-5 text-red-500'>
            You need to provide us your {walletName} Wallet of origin first.
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
        <div
          className='mx-auto mt-4 flex w-[340px] cursor-pointer items-center gap-2 overflow-hidden rounded-3xl border border-gray-500/50 px-4 py-2 text-xs hover:bg-muted-foreground/10 active:bg-muted-foreground/20'
          onClick={copyCode}
        >
          <span className='w-full overflow-hidden text-ellipsis'>{value}</span>{' '}
          <Copy className='ml-auto h-3 text-foreground' />
        </div>
      )}
    </div>
  );
};

export default QR;
