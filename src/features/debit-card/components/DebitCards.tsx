'use client';

import { useState } from 'react';

import { cn } from '@/lib';

import DebitCard from './DebitCard';

import { Card } from '..';

interface Pops {
  cards: Card[];
}

const DebitCards: React.FC<Pops> = ({ cards }) => {
  const [cardSelected, setCardSelected] = useState(0);
  const currentCard = cards[cardSelected];

  if (!currentCard) return null;

  return (
    <div className='flex flex-col gap-5 rounded-md bg-muted p-4'>
      <DebitCard {...currentCard} />
      {cards.length > 1 && (
        <div className='flex items-center gap-2'>
          {cards.map((_card, index) => (
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
      )}
    </div>
  );
};

export default DebitCards;
