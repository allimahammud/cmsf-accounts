'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
//import NavMenu from '@/app/ui/dashboard/nav-menu';

//import { menuItems } from '@/app/lib/menu';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

//  const menuItems = [
//   {
//     id: 1,
//     label: "Home",
//     path: "/dashboard/overview",
//   },
//   {
//     id: 2,
//     label: "Invoices",
//     path: "/dashboard/invoices",
//   },
//   {
//     id: 3,
//     label: "Customers",
//     path: "/dashboard/customers",
//     children: [
//       { id: 4, label: "Customer Entry", path: "/dashboard/customers/entry" },
//       { id: 5, label: "Customer Edit", path: "dashboard/customers/edit" },
//     ],
//   },
//   {
//     id: 6,
//     label: "Contact",
//     path: "dashboard/contact",
//   },
// ];


const links = [
  { name: 'Home', href: '/dashboard/overview', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}

            // <NavMenu items={menuItems} />
            //className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
