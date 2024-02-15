'use client';

import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';

interface Props {
  children: React.ReactNode;
}

const Provider = (props: Props) => {
  return (
    <SessionProvider refetchInterval={60}>
      <Toaster />
      {props.children}
    </SessionProvider>
  );
};

export default Provider;
