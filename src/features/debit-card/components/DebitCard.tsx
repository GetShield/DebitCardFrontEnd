'use client';

import Image from 'next/image';

import { LogoIcon, MasterCardIcon } from '@/assets';
import { toast } from 'sonner';

interface Props {
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const DebitCard: React.FC<Props> = ({ name, cardNumber, expiryDate, cvv }) => {
  const copyCode = () => {
    navigator.clipboard
      .writeText(cardNumber)
      .then(() => {
        toast.success('Card number copied to clipboard');
        console.log('copied');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div
      className='relative h-[200px] min-h-[200px] w-[318px] min-w-[318px] cursor-copy select-none overflow-auto rounded-lg'
      onClick={copyCode}
    >
      <Image
        src={'/images/card.png'}
        alt='Debit Card'
        width={318}
        height={200}
        className='h-[200px] min-h-[200px] w-[318px] min-w-[318px]'
      />
      <div className='absolute inset-0 tracking-wider'>
        <div className='h-[140px] p-5'>
          <div className='flex items-center justify-between'>
            <MasterCardIcon />
            <LogoIcon className='scale-50' />
          </div>
          <div className='mt-4 flex justify-between'>
            <div className='w-full min-w-fit text-center text-2xl font-bold text-background'>
              {cardNumber}
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 flex h-[60px] w-full items-center justify-between bg-black/50 px-6 text-xs font-extralight text-background backdrop-blur-sm'>
          <span>{name}</span>
          <span>Exp {expiryDate}</span>
        </div>
      </div>
    </div>
  );
};

export default DebitCard;
