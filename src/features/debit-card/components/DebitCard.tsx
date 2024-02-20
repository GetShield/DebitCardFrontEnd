'use client';

import Image from 'next/image';

import { LogoIcon, VisaIcon } from '@/assets';
import { formatCardNumber, formatExpiry } from '@/lib';
import { toast } from 'sonner';
import { Card } from '..';

const DebitCard: React.FC<Card> = ({
  cardName,
  cardNumber,
  cardExpiry,
  cardCVV,
}) => {
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
        className='h-[200px] min-h-[200px] w-[318px] min-w-[318px] bg-black/90'
      />
      <div className='absolute inset-0 tracking-wider'>
        <div className='h-[140px]'>
          <div className='flex items-center justify-between px-5 pt-5'>
            <VisaIcon className='h-14 w-14' />
            <LogoIcon className='scale-50' />
          </div>
          <div className='mt-4 flex justify-between'>
            <div className='w-full min-w-fit text-center text-2xl font-bold text-background'>
              {formatCardNumber(cardNumber)}
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 flex h-[60px] w-full items-center justify-between bg-black/50 px-6 text-xs font-extralight text-background backdrop-blur-sm'>
          <span>{cardName}</span>
          <span>{formatExpiry(cardExpiry)}</span>
        </div>
      </div>
    </div>
  );
};

export default DebitCard;
