'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { Button, Nav } from '@/components';

export default function Error({ error }: { error: Error }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const reset = () => {
    router.refresh();
  };

  return (
    <div className='flex h-screen w-screen'>
      <Nav session={null} />
      <div className='m-auto flex flex-col items-center gap-1'>
        <h2>Something went wrong!</h2>
        <Button className='px-8 py-2' variant='default' onClick={() => reset()}>
          Try again
        </Button>
      </div>{' '}
    </div>
  );
}
