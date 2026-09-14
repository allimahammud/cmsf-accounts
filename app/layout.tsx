import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
<<<<<<< HEAD
import { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
const metadata: Metadata = {
=======
import type { Metadata } from 'next';
import Providers from '@/app/providers';

export const metadata: Metadata = {
>>>>>>> 98ed8f2 (update 14-sep-26 purpose landing page changed)
  title: {
    template: '%s | CMSF Dashboard',
    default: 'CMSF Software Management',
  },
  description: 'The official CMSF Software management ERP System.',
  metadataBase: new URL('https://cmsfbd.org/'),
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< HEAD
  console.log('Layout metadata:', metadata);
try {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        {' '}
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
   } catch (error) {
    // Optionally log or re-throw
    throw error;
  }
}
=======
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
>>>>>>> 98ed8f2 (update 14-sep-26 purpose landing page changed)
