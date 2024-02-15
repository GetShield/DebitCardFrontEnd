import { Nav } from '@/components';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <>
      <Nav />
      <main className='m-auto h-full min-h-screen max-w-6xl pt-[var(--nav-height)]'>
        {children}
      </main>
    </>
  );
}
