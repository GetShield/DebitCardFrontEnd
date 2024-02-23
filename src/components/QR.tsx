'use client';

import { Copy } from 'lucide-react';
import QRCode from 'react-qr-code';
import { toast } from 'sonner';

import { Wallet } from '@/features/wallets';
import { usePathname, useRouter } from 'next/navigation';
import { format } from 'url';
import { Button } from '.';

interface Props {
  userHasWallet: boolean;
  currentShieldWallet: Wallet | undefined;
  searchParams: { [key: string]: string };
}

const QR: React.FC<Props> = ({
  userHasWallet,
  searchParams,
  currentShieldWallet,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const value = currentShieldWallet?.address;
  const walletName = currentShieldWallet?.blockchains[0].name;
  const walletDescription = currentShieldWallet?.blockchains[0].description;

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

  const handleRegisterWallet = () => {
    const url = format({
      pathname: pathname,
      query: { ...searchParams, register: true },
    });
    router.replace(url, { scroll: false });
  };

  return (
    <div className=''>
      <div className='relative m-auto flex max-w-[340px] rounded-md bg-muted p-8'>
        {!userHasWallet && (
          <div className='absolute left-1/2 top-1/2 flex translate-x-[-50%] translate-y-[-50%] select-none rounded-sm bg-secondary p-1 text-center text-xs font-medium leading-5 text-red-500'>
            You need to provide us your {walletDescription} Wallet of origin
            first.
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
      {!userHasWallet && (
        <Button
          className='mx-auto my-4 flex px-10 py-2.5'
          onClick={() => handleRegisterWallet()}
        >
          Register my {walletDescription} address
        </Button>
      )}
    </div>
  );
};

export default QR;
