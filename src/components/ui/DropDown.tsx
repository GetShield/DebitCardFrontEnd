'use client';

import { cn } from '@/utils';
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
        <div className='fixed inset-0' onClick={() => setIsOpen(false)}></div>
      )}
      {isOpen && (
        <div className='absolute right-0 mt-1 divide-y overflow-auto rounded-2xl border border-border bg-secondary text-sm'>
          {options.map((option, index) => (
            <div
              key={index}
              className={cn('w-full cursor-pointer px-4 py-2', {
                'bg-primary text-center text-secondary hover:bg-primary/90':
                  option.type === 'button',
              })}
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
