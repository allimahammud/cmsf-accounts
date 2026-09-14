import { NavItem } from '@/app/ui/dashboard/nav-menu';
export const menuItems: NavItem[] = [
  {
    id: 1,
    label: 'Home',
    path: '/dashboard/overview',
  },
  {
    id: 2,
    label: 'Invoices',
    path: '/dashboard/invoices',
  },
  {
    id: 3,
    label: 'Customers',
    path: '#',
    children: [
      {
        id: 4,
        label: 'Customer Bank Information',
        path: '#',
        children: [
          {
            id: 7,
            label: 'Customer Bank Information List',
            path: '/dashboard/customers/bank-info/list',
          },
          {
            id: 10,
            label: 'Customer Bank Information Edit',
            path: '/dashboard/customers/bank-info/edit',
          },
        ],
      },
      { id: 9, label: 'Customer Create', path: '/dashboard/customers/create' },

      { id: 5, label: 'Customer Edit', path: '/dashboard/customers/edit' },
      { id: 8, label: 'Customer List', path: '/dashboard/customers' },
    ],
  },
  {
    id: 6,
    label: 'User',
    path: '/dashboard/user',
  },
   {
    id: 11,
    label: 'Bank',
    path: '/dashboard/bank',
  },
];

// export const menuItems = [
//   {
//     id: 1,
//     label: "Home",
//     path: "/",
//   },
//   {
//     id: 2,
//     label: "About",
//     path: "/about",
//   },
//   {
//     id: 3,
//     label: "Services",
//     path: "/services",
//     children: [
//       { id: 4, label: "Web Development", path: "/services/web-dev" },
//       { id: 5, label: "SEO", path: "/services/seo" },
//     ],
//   },
//   {
//     id: 6,
//     label: "Contact",
//     path: "/contact",
//   },
// ];
