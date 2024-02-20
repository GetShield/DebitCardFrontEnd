import { Loader } from '@/components/ui';

export default function Loading() {
  return (
    <div className='flex min-h-screen fixed inset-0 bg-white z-[40] flex-col items-center justify-center'>
      <Loader />
    </div>
  );
}
