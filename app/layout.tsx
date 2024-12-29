import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Replace Geist with a real font
import './globals.css';
import Appbar from '../components/Appbar';
import Footer from '@/components/Footer';
import React from 'react';
import ReduxProvider from '@/components/ReduxProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ramanlal Maniyar Smruti Foundation',
  description: 'Made with Love',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ReduxProvider>
          <Appbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
