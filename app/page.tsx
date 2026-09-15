// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// //import styles from '@/app/ui/home.module.css';
// import { lusitana } from '@/app/ui/fonts';
// import Image from 'next/image';
// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col p-6">
//       {/* <div className={styles.shape} /> */}
//       <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
//         {<AcmeLogo />}
//       </div>
//       <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
//         <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
//           {/* <div
//   className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
// /> */}
//           <p
//             className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
//           >
//             <strong>Welcome to CMSF. </strong> This is the demo for the CMSF ERP
//             system, designed to streamline your business operations and brought
//             to you by our expert team{' '}
//             <a href="https://cmsfbd.org/" className="text-blue-500">
//               CMSF Website
//             </a>
//             , ICT Department.
//           </p>
//           <Link
//             href="/login"
//             className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
//           >
//             <span>Accounts Software</span>{' '}
//             <ArrowRightIcon className="w-5 md:w-6" />
//           </Link>
//         </div>
//         <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
//           {/* Add Hero Images Here */}
//           <Image
//             src="/all_emp.jpg"
//             width={1000}
//             height={750}
//             className="hidden md:block"
//             alt="Screenshots of the dashboard project showing desktop "
//             //unoptimized
//             priority={false}
//           />
//           <Image
//             src="/hero-mobile.png"
//             width={560}
//             height={620}
//             className="block md:hidden"
//             alt="Screenshot of the dashboard project showing mobile version"
//             priority={false}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }



// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import { lusitana } from '@/app/ui/fonts';
// import Image from 'next/image';

// export default function Page() {
//   return (
//     <main className="min-h-screen overflow-hidden bg-white">
//       {/* Header */}
//       <header className="border-b border-gray-100 bg-white/95 backdrop-blur">
//         <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
//           <Link href="/" className="flex items-center">
//             <AcmeLogo />
//           </Link>

//           <div className="flex items-center gap-3">
//             <a
//               href="https://cmsfbd.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 sm:block"
//             >
//               CMSF Website
//             </a>

//             <Link
//               href="/login"
//               className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
//             >
//               Login
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="relative">
//         {/* Background decoration */}
//         <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
//         <div className="absolute right-0 top-40 -z-10 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl" />

//         <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
//           {/* Left content */}
//           <div>
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
//               <span className="h-2 w-2 rounded-full bg-blue-600" />
//               CMSF ERP Management System
//             </div>

//             <h1
//               className={`${lusitana.className} text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl`}
//             >
//               Manage Your Business
//               <span className="block text-blue-600">Smarter & Faster</span>
//             </h1>

//             <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
//               Welcome to CMSF. This is the demo for the CMSF ERP system,
//               designed to streamline your business operations and brought to
//               you by our expert team, ICT Department.
//             </p>

//             {/* Features */}
//             <div className="mt-8 grid gap-3 sm:grid-cols-2">
//               <div className="flex items-center gap-2 text-sm text-gray-700">
//                 <CheckCircleIcon className="h-5 w-5 text-green-500" />
//                 Easy Account Management
//               </div>

//               <div className="flex items-center gap-2 text-sm text-gray-700">
//                 <CheckCircleIcon className="h-5 w-5 text-green-500" />
//                 Customer Management
//               </div>

//               <div className="flex items-center gap-2 text-sm text-gray-700">
//                 <CheckCircleIcon className="h-5 w-5 text-green-500" />
//                 Invoice Management
//               </div>

//               <div className="flex items-center gap-2 text-sm text-gray-700">
//                 <CheckCircleIcon className="h-5 w-5 text-green-500" />
//                 Secure Dashboard
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//               <Link
//                 href="/login"
//                 className="group flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
//               >
//                 <span>Accounts Software</span>
//                 <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//               </Link>

//               <a
//                 href="https://cmsfbd.org/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
//               >
//                 Visit CMSF Website
//               </a>
//             </div>
//           </div>

//           {/* Right image */}
//           <div className="relative">
//             <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-100 to-indigo-100 opacity-60 blur-2xl" />

//             <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl shadow-gray-200/70">
//               <Image
//                 src="/all_emp.jpg"
//                 width={1000}
//                 height={750}
//                 className="hidden h-auto w-full rounded-xl md:block"
//                 alt="CMSF ERP dashboard"
//                 priority
//               />

//               <Image
//                 src="/hero-mobile.png"
//                 width={560}
//                 height={620}
//                 className="block h-auto w-full rounded-xl md:hidden"
//                 alt="CMSF ERP mobile dashboard"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Feature cards */}
//       <section className="border-t border-gray-100 bg-gray-50">
//         <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
//           <div className="mx-auto max-w-2xl text-center">
//             <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
//               Powerful & Simple
//             </p>

//             <h2
//               className={`${lusitana.className} mt-2 text-3xl font-bold text-gray-900 sm:text-4xl`}
//             >
//               Everything you need in one place
//             </h2>

//             <p className="mt-4 text-gray-600">
//               CMSF helps your team manage everyday business operations from a
//               single, easy-to-use platform.
//             </p>
//           </div>

//           <div className="mt-12 grid gap-6 md:grid-cols-3">
//             <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
//                 📊
//               </div>

//               <h3 className="mt-5 text-lg font-bold text-gray-900">
//                 Smart Dashboard
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-gray-600">
//                 Get a clear overview of your business activities and important
//                 information from one dashboard.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
//                 👥
//               </div>

//               <h3 className="mt-5 text-lg font-bold text-gray-900">
//                 Customer Management
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-gray-600">
//                 Keep customer information organized and manage your business
//                 relationships efficiently.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl">
//                 🧾
//               </div>

//               <h3 className="mt-5 text-lg font-bold text-gray-900">
//                 Invoice Management
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-gray-600">
//                 Create, manage and track invoices with a simple and efficient
//                 workflow.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-blue-600">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center sm:flex-row sm:text-left lg:px-8">
//           <div>
//             <h2
//               className={`${lusitana.className} text-3xl font-bold text-white`}
//             >
//               Ready to manage your accounts?
//             </h2>

//             <p className="mt-2 text-blue-100">
//               Access the CMSF Accounts Software and get started.
//             </p>
//           </div>

//           <Link
//             href="/login"
//             className="group flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50"
//           >
//             Open Accounts Software
//             <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-950">
//         <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
//           <div className="text-sm text-gray-400">
//             © {new Date().getFullYear()} CMSF. All rights reserved.
//           </div>

//           <a
//             href="https://cmsfbd.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-sm font-medium text-gray-300 transition hover:text-white"
//           >
//             CMSF Website
//           </a>
//         </div>
//       </footer>
//     </main>
//   );
// }




import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* ================= TOP 4 INCH BLUE AREA ================= */}
      <section className="relative h-[400px] overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">
        {/* Background decoration */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />

        {/* Navigation */}
        <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
            href="/"
            className="rounded-xl bg-white/10 px-4 py-2 backdrop-blur-md"
          >
            <AcmeLogo />
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://cmsfbd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 sm:block"
            >
              CMSF Website
            </a>

            <Link
              href="/login"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-md transition hover:bg-blue-50"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Top title */}
        <div className="relative mx-auto max-w-7xl px-6 pt-10 text-center lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            CMSF ERP Management System
          </div>

          <h1
            className={`${lusitana.className} mt-5 text-4xl font-bold text-white sm:text-5xl`}
          >
            Manage Your Business
            <span className="block text-blue-100">
              Smarter & Faster
            </span>
          </h1>
        </div>

        {/* Bottom curved edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            className="h-16 w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="M0,70 C240,20 480,20 720,60 C960,100 1200,100 1440,50 L1440,100 L0,100 Z"
            />
          </svg>
        </div>
      </section>

      {/* ================= MAIN HERO CONTENT ================= */}
      <section className="relative bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-2 lg:px-8 lg:pt-6">
          {/* Left content */}
          <div>
            <p className="max-w-xl text-lg leading-8 text-gray-600">
              Welcome to CMSF. This is the demo for the CMSF ERP system,
              designed to streamline your business operations and brought to
              you by our expert team, ICT Department.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Easy Account Management
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Customer Management
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Invoice Management
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                Secure Dashboard
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/login"
                className="group flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                <span>Accounts Software</span>

                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://cmsfbd.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                Visit CMSF Website
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-100 to-indigo-100 opacity-60 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl shadow-gray-200/70">
              <Image
                src="/all_emp.jpg"
                width={1000}
                height={750}
                className="hidden h-auto w-full rounded-xl md:block"
                alt="CMSF ERP dashboard"
                priority
                unoptimized
              />

              <Image
                src="/hero-mobile.png"
                width={560}
                height={620}
                className="block h-auto w-full rounded-xl md:hidden"
                alt="CMSF ERP mobile dashboard"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE CARDS ================= */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Powerful & Simple
            </p>

            <h2
              className={`${lusitana.className} mt-2 text-3xl font-bold text-gray-900 sm:text-4xl`}
            >
              Everything you need in one place
            </h2>

            <p className="mt-4 text-gray-600">
              CMSF helps your team manage everyday business operations from a
              single, easy-to-use platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                📊
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Smart Dashboard
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Get a clear overview of your business activities and important
                information from one dashboard.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                👥
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Customer Management
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Keep customer information organized and manage your business
                relationships efficiently.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl">
                🧾
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Invoice Management
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Create, manage and track invoices with a simple and efficient
                workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center sm:flex-row sm:text-left lg:px-8">
          <div>
            <h2
              className={`${lusitana.className} text-3xl font-bold text-white`}
            >
              Ready to manage your accounts?
            </h2>

            <p className="mt-2 text-blue-100">
              Access the CMSF Accounts Software and get started.
            </p>
          </div>

          <Link
            href="/login"
            className="group flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50"
          >
            Open Accounts Software

            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} CMSF. All rights reserved.
          </div>

          <a
            href="https://cmsfbd.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-300 transition hover:text-white"
          >
            CMSF Website
          </a>
        </div>
      </footer>
    </main>
  );
}
