import { LoginForm } from '@/features/auth';

export default async function Page() {
  return (
    <div className='flex h-full min-h-dvh w-screen'>
      <LoginForm />
    </div>
  );
}
