'use client';

import { cn } from '@/utils';
import { useState } from 'react';
import DebitCard from './DebitCard';

interface Pops {}

const DebitCards: React.FC<Pops> = () => {
  const [cardSelected, setCardSelected] = useState(0);

  const FAKE_CARDS = [
    {
      name: 'Chris Williams',
      cardNumber: '5635 2271 7012 9682',
      expiryDate: '09/27',
      cvv: '123',
    },
    {
      name: 'Chris Williams',
      cardNumber: '1234 5678 9101 1121',
      expiryDate: '12/27',
      cvv: '123',
    },
    {
      name: 'Chris Williams',
      cardNumber: '1234 5678 9101 1121',
      expiryDate: '12/27',
      cvv: '123',
    },
    {
      name: 'Chris Williams',
      cardNumber: '1234 5678 9101 1121',
      expiryDate: '12/27',
      cvv: '123',
    },
  ];

  const currentCard = FAKE_CARDS[cardSelected];

  return (
    <div className='flex flex-col gap-5 rounded-md bg-muted p-4'>
      <DebitCard {...currentCard} />
      <div className='flex items-center gap-2'>
        {FAKE_CARDS.map((card, index) => (
          <div
            key={index}
            className={cn(
              'flex h-[5px] w-1/4 cursor-pointer items-center rounded-lg bg-muted-foreground/40',
              {
                'bg-foreground': cardSelected === index,
              }
            )}
            onClick={() => setCardSelected(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DebitCards;
