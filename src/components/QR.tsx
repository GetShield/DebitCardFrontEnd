'use client';

import { Copy } from 'lucide-react';
import QRCode from 'react-qr-code';
import { toast } from 'sonner';

interface Props {
  value: string;
}

const QR: React.FC<Props> = ({ value }) => {
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
    <div className=''>
      <div className='m-auto flex rounded-md bg-muted p-8'>
        <QRCode
          size={256}
          className='h-auto w-full max-w-full'
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
      <div
        className='mt-4 flex cursor-pointer items-center gap-2 overflow-hidden rounded-3xl border border-gray-500/50 px-4 py-2 text-xs'
        onClick={copyCode}
      >
        <span className='max-w-64 overflow-hidden text-ellipsis'>{value}</span>{' '}
        <Copy className='h-3 text-foreground' />
      </div>
    </div>
  );
};

export default QR;
