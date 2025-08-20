// // components/NavMenu.tsx
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export interface NavItem {
//   id: number;
//   label: string;
//   path: string;
//   children?: NavItem[];
// }

// export default function NavMenu({ items }: { items: NavItem[] }) {
//   const pathname = usePathname();

//   return (
//     <nav>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id} className={pathname === item.path ? "active" : ""}>
//             <Link href={item.path}>{item.label}</Link>
//             {item.children && (
//               <ul>
//                 {item.children.map((child) => (
//                   <li
//                     key={child.id}
//                     className={pathname === child.path ? "active" : ""}
//                   >
//                     <Link href={child.path}>{child.label}</Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import clsx from 'clsx';
// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
// export interface NavItem {
//   id: number;
//   label: string;
//   path: string;
//   children?: NavItem[];
// }

// export default function NavMenu({ items }: { items: NavItem[] }) {
//   const pathname = usePathname();
//   const [openMenus, setOpenMenus] = useState<number[]>([]);

//   const toggleMenu = (id: number) => {
//     setOpenMenus((prev) =>
//       prev.includes(id) ? prev.filter((menuId) => menuId !== id) : [...prev, id]
//     );
//   };

//   return (
//     <nav>
//       <ul>
//         {items.map((item) => {
//           const isActive = pathname === item.path;
//           const isOpen = openMenus.includes(item.id);
//           const LinkIcon = UserGroupIcon;
//           return (
//             <li key={item.id}>
//               <div className={`menu-item ${isActive ? "active" : ""}`}>
//                 {/* <Link href={item.path}>{item.label}

//                 </Link> */}
//                 <Link
//             key={item.label}
//             href={item.path}

//             // <NavMenu items={menuItems} />
//             //className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
//           className={clsx(
//               'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
//               {
//                 'bg-sky-100 text-blue-600': pathname === item.path,
//               },
//             )}
//           >
//             <LinkIcon className="w-6" />
//             <p className="hidden md:block">{item.label}</p>
//           </Link>

//                 {item.children && (
//                   <button
//                     onClick={() => toggleMenu(item.id)}
//                     aria-label="Toggle submenu"
//                     style={{ marginLeft: "8px" }}
//                   >
//                     {isOpen ? "▲" : "▼"}
//                   </button>
//                 )}

//                  {item.children.ch && (
//                   <button
//                     onClick={() => toggleMenu(item.id)}
//                     aria-label="Toggle submenu"
//                     style={{ marginLeft: "8px" }}
//                   >
//                     {isOpen ? "▲" : "▼"}
//                   </button>
//                 )}
//               </div>

//               {item.children && isOpen && (
//                 <ul className="submenu">
//                   {item.children.map((child) => (
//                     <li
//                       key={child.id}
//                       className={pathname === child.path ? "active" : ""}
//                     >
//                       {/* <Link href={child.path}>{child.label}</Link> */}
//                        <Link
//             key={child.label}
//             href={child.path}

//             // <NavMenu items={menuItems} />
//             //className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
//           className={clsx(
//               'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
//               {
//                 'bg-sky-100 text-blue-600': pathname === child.path,
//               },
//             )}
//           >
//             <LinkIcon className="w-6" />
//             <p className="hidden md:block">{child.label}</p>
//           </Link>

//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           );
//         })}
//       </ul>

//       <style jsx>{`
//         nav ul {
//           list-style: none;
//           padding: 0;
//         }

//         .menu-item {
//           display: flex;
//           align-items: center;
//         }

//         .submenu {
//           margin-left: 20px;
//           padding-top: 5px;
//         }

//         .active > a {
//           font-weight: bold;
//           color: blue;
//         }

//         button {
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-size: 14px;
//         }
//       `}</style>
//     </nav>
//   );
// }

// components/NavMenu.tsx
'use client';
//import Cookies from 'js-cookie';
//import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
//import { fetchUserWiseMenu } from '@/app/lib/data';
//import { cookies } from 'next/headers';
//import { getToken } from 'next-auth/jwt';
//import { NextRequest } from 'next/server';
import { useSession } from 'next-auth/react';
//const secret = process.env.NEXTAUTH_SECRET;

interface UserMenuPermission {
  id: string;
  name: string;
  email: string;
  menuid: number;
}

export interface NavItem {
  id: number;
  label: string;
  path: string;
  children?: NavItem[];
}

interface MenuProps {
  items: NavItem[];
  level?: number;
}

export default function NavMenu({ items, level = 0 }: MenuProps) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  const toggleMenu = (id: number) => {
    setOpenMenus((prev) =>
      prev.includes(id) ? prev.filter((mid) => mid !== id) : [...prev, id]
    );
  };
  // const cookieStore = cookies();
  // const userId = await (await cookieStore).get('id')?.value;
  // console.log("userID",userId);

  // use client';

  // export default function ExampleComponent() {
  //   useEffect(() => {
  //     const userId = Cookies.get('userId');
  //     console.log('Client-side userId:', userId);
  //   }, []);

  //   return <div>Check console for user ID</div>;
  // }

  //  const userId = Cookies.get('id');

  //const token = localStorage.getItem('token');

  // const tokenn =  getToken({  req: NextRequest, secret });

  //  const userIdd = tokenn.id;
  // console.log('Client-side userId:', {session.user?.id});
  //const loginID="";
  // const { loginId, password } = await req.json();

  const { data: session, status } = useSession();
  console.log('Client-side userId:', session?.user.id);
  const [menuList, setMenuList] = useState<UserMenuPermission[]>([]);

  //const du= session?.user.id;
  //if (!du) return;
  //  const loadMenus = async () => {
  //       const data = await fetchUserWiseMenu( du);
  //       console.log('Client-side data:', data);
  //     };

  // const loadMenus=async () => {
  //             'use server';
  //             const data = await fetchUserWiseMenu( du);
  //             console.log('Client-side data:', data);
  //           }

  useEffect(() => {
    if (status !== 'authenticated' || !session?.user?.id) return;
    const fetchMenu = async () => {
      // if (!session?.user?.id) return;

      try {
        const res = await fetch('/api/menus', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: session.user.id }),
        });

        if (!res.ok) throw new Error('Menu fetch failed');


        const data = await res.json();
        if (!data) {
    throw new Error('❌ Menu data failed to load');
  }
        setMenuList(data);
      } catch (err) {
        console.error('Menu fetch error:', err);
      }
    };

    fetchMenu();
  }, [session?.user?.id, status]);

  console.log('menu', menuList);

  // const menulist =  fetchUserWiseMenu(session?.user.id);
  return (
    <ul className={`menu level-${level}`}>
      {items.map((item) => {
        const permittedMenu = menuList.some((menu) => menu.menuid === item.id);

        if (permittedMenu) {
          const isActive = pathname === item.path;
          const isOpen = openMenus.includes(item.id);
          const hasChildren = item.children && item.children.length > 0;

          return (
            <li key={item.id} className={isActive ? 'active' : ''}>
              <div className="menu-item">
                <Link href={item.path}>{item.label}</Link>
                {hasChildren && (
                  <button
                    onClick={() => toggleMenu(item.id)}
                    aria-label="Toggle submenu"
                  >
                    {isOpen ? '▲' : '▼'}
                  </button>
                )}
              </div>

              {hasChildren && isOpen && (
                <NavMenu items={item.children!} level={level + 1} />
              )}
            </li>
          );
        }
      })}

      <style jsx>{`
        .menu {
          list-style: none;
          padding-left: ${level === 0 ? '0px' : '16px'};
          margin: 0;
        }

        .menu-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background: #fff;
          border: 1px solid #eee;
          margin-bottom: 4px;
          border-radius: 4px;
        }

        .menu-item:hover {
          background-color: #f0f0f0;
        }

        a {
          text-decoration: none;
          color: #333;
        }

        .active a {
          font-weight: bold;
          color: #0070f3;
        }

        button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
          margin-left: 8px;
        }
      `}</style>
    </ul>
  );
}
