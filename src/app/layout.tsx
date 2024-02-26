import { Suspense, ReactNode } from 'react';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { cn } from '@/libs/utils';
import '../styles/globals.css';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Provider from '@/components/provider/Provider';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'Jinsoul Blog',
  description: 'Generated by Jinsoul',
  robots: { index: false, follow: false },
  verification: {
    google: 'HCBTUIXiE7eXMeGNkwVg8JmmIQsVpvOb6rO6VQ-iUms',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const bodyStyle = cn(
    'flex flex-col mx-auto min-h-screen max-w-3xl px-6 lg:max-w-6xl lg:px-8',
  );

  return (
    <html lang="ko" suppressHydrationWarning>
      <GoogleAnalytics gaId={'G-4843GGMST8'} />
      <body className={cn(bodyStyle)}>
        <Provider>
          <Header />
          <Suspense fallback={<Loading />}>
            <main className="grow my-5 flex flex-col">{children}</main>
          </Suspense>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
