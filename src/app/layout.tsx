import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import Provider from '@/lib/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shield',
  description: 'An app for managing your personal finances.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-background text-foreground`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
