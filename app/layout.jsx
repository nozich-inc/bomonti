import { Providers } from '@/components/providers';
import SkeletonCard from '@/components/skeleton-card';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Socket from './socket';

const meta = {
  title:
    'Bomonti Cafe & Restaurant | Turkish Restaurant | 44 Market Street NSW 2000',
  description:
    'Turkish Restaurant | 44 Market Street in Sydney Town Hall, NSW 2000, Australia',
  image: '/logo.png',
};

export const metadata = {
  ...meta,
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL).origin,
  charSet: 'utf-8',
  viewport: 'width=device-width, initial-scale=1.0',
  favicon: '/favicon.ico',
  twitter: { card: 'summary_large_image', ...meta },
  facebook: meta,
};

async function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white dark:bg-black">
      <body className="dx-viewport h-full flex dark:bg-slate-800/70">
        <Providers>
          <Suspense fallback={<SkeletonCard />}>
            <Socket />
          </Suspense>

          <Toaster />

          <div className="flex flex-col overflow-scroll min-w-0 w-full">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
