'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { Inter, Dancing_Script } from 'next/font/google';
import 'devextreme/dist/css/dx.light.css';
import '@/styles/globals.css';

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
});

export const dancingScript = Dancing_Script({
  variable: '--font-dancing-script',
  subsets: ['latin', 'latin-ext'],
});

export function Providers({ children }) {
  return (
    <SessionProvider>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
            --font-dancing-script: ${dancingScript.style.fontFamily};
          }
        `}
      </style>

      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </SessionProvider>
  );
}
