import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  console.log({ session });

  if (session) {
    redirect('/dashboard');
  }
  return <main className='h-full min-h-screen'>{children}</main>;
}
