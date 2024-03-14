import { ReactNode } from 'react';

import { cn } from '@/libs/utils';
import '../../styles/globals.css';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        'flex flex-col mx-auto min-h-screen max-w-3xl px-6 lg:max-w-6xl lg:px-8',
      )}
    >
      <Header />
      <main className="grow my-5 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
