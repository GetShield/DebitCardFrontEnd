'use client';

import { cn } from '@/lib';
import React, { useState } from 'react';

export interface OptionProps {
  type: 'button' | 'text';
  name: string | undefined | null;
  onClick: () => void;
}

interface Props {
  children: React.ReactNode;
  options: OptionProps[];
}

const DropDown: React.FC<Props> = ({ children, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: OptionProps) => {
    option.onClick();
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>
      {isOpen && (
        <div
          className='fixed inset-0 h-screen w-screen'
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      {isOpen && (
        <div className='absolute right-0 mt-1 w-max divide-y overflow-hidden rounded-2xl border border-border bg-secondary text-sm'>
          {options.map((option, index) => (
            <div
              key={index}
              className={cn(
                'w-full max-w-[80vw] cursor-pointer overflow-hidden text-ellipsis px-4 py-2',
                {
                  'bg-primary text-center text-secondary hover:bg-primary/90':
                    option.type === 'button',
                }
              )}
              onClick={() => handleSelect(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
