import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';
//import NavMenu from '@/app/ui/dashboard/nav-menu';
//import { menuItems } from '@/app/lib/menu';
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
//export const experimental_ppr = true;
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
