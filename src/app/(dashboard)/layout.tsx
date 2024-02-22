import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { Nav } from '@/components';
import { authOptions } from '@/lib';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (!session || session.isExpired) {
    redirect('/login');
  }

  return (
    <>
      <Nav session={session} />
      <main className='m-auto h-full min-h-screen max-w-6xl pt-[var(--nav-height)]'>
        {children}
      </main>
    </>
  );
}
