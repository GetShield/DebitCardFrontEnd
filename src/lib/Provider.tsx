'use client';

import { SessionProvider } from 'next-auth/react';

interface Props {
  children: React.ReactNode;
}

const Provider = (props: Props) => {
  return (
    <SessionProvider refetchInterval={60}>{props.children}</SessionProvider>
  );
};

export default Provider;
