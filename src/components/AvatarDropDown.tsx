'use client';

import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import DropDown, { OptionProps } from './ui/DropDown';

interface Props {
  session: Session;
}

const AvatarDropDown: React.FC<Props> = ({ session }) => {
  const options: OptionProps[] = [
    {
      type: 'text',
      name: session?.user?.name,
      onClick: () => {},
    },
    {
      type: 'text',
      name: session?.user?.email,
      onClick: () => {},
    },
    {
      type: 'button',
      name: 'Logout',
      onClick: () => signOut(),
    },
  ];

  console.log(new Date(session.user.exp * 1000).toISOString());

  console.log({ session });

  return (
    <DropDown options={options}>
      <Image
        alt='Avatar'
        src='/images/avatar.png'
        width={200}
        height={200}
        className='h-8 w-8 cursor-pointer overflow-auto rounded-full'
      />
    </DropDown>
  );
};

export default AvatarDropDown;
