'use client';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 import { SessionProvider } from 'next-auth/react';
 const metadata: Metadata = {
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
 console.log('Layout metadata:', metadata);

  return (
    <html lang="en" suppressHydrationWarning>
       <body className={`${inter.className} antialiased`}  suppressHydrationWarning>  <SessionProvider>{children}</SessionProvider></body>
    </html>
  );
}
