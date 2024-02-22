import { authOptions } from '@/lib';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (session && !session.isExpired) {
    redirect('/dashboard');
  }
  return <main className='h-full min-h-screen'>{children}</main>;
}
