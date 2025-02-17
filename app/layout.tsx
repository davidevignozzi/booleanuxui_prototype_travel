import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Tabbar from '@/components/shared/tabbar';
import Navbar from '@/components/shared/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Travelhello',
  description: 'Travelhello x Boolean'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />

        {children}

        <Tabbar />
      </body>
    </html>
  );
}
