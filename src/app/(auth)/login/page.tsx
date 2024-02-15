import { LoginForm } from '@/features/auth';

export default async function Page() {
  return (
    <div className='flex h-full min-h-screen w-screen'>
      <LoginForm />
    </div>
  );
}
