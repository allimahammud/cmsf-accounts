import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import type { Metadata } from 'next';
import Providers from '@/app/providers';

export const metadata: Metadata = {
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}