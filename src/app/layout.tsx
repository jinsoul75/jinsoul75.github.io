import { Suspense, ReactNode } from 'react';
import type { Metadata } from 'next';

import { cn } from '@/libs/utils';
import '../styles/globals.css';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'Jinsoul Blog',
  description: 'Generated by Jinsoul',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const bodyStyle =
    'flex flex-col mx-auto min-h-screen max-w-3xl px-6 lg:max-w-6xl lg:px-8';

  return (
    <html lang="ko">
      <body className={cn(bodyStyle)} suppressHydrationWarning={true}>
        <Header />
        <Suspense fallback={<Loading />}>
          <main className="grow my-5 flex flex-col">{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
