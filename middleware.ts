// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
 
// export default NextAuth(authConfig).auth;
 
// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };


// 
//ali
// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';

// export default NextAuth(authConfig);

// export const config = {
//   matcher: ['/dashboard/:path*'],
// };

// middleware.ts
// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
// // Export the actual middleware function
// export default NextAuth(authConfig);

// // Define what paths should be protected
// export const config = {
//   matcher: ['/dashboard/:path*'],
// };

// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';

// export default NextAuth(authConfig);

// export const config = {
//   matcher: ['/dashboard/:path*'],
// };


// import { authMiddleware } from 'next-auth/middleware';

// export default authMiddleware;

// export const config = {
//   matcher: ['/dashboard/:path*'], // Protect only /dashboard and its subroutes
// };

/////////////// closd 21-jul-25////////////////
// import NextAuth from 'next-auth';
// import { authConfig } from './app/(auth)/auth.config';

// export default NextAuth(authConfig).auth;

// export const config = {
//   matcher: ['/dashboard/:path*'],
// };



// import { NextResponse, type NextRequest } from 'next/server';
// import { getToken } from 'next-auth/jwt';
// //import { guestRegex, isDevelopmentEnvironment } from './lib/constants';

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   /*
//    * Playwright starts the dev server and requires a 200 status to
//    * begin the tests, so this ensures that the tests can start
//    */
//   if (pathname.startsWith('/ping')) {
//     return new Response('pong', { status: 200 });
//   }

//   if (pathname.startsWith('/api/auth')) {
//     return NextResponse.next();
//   }

//   const token = await getToken({
//     req: request,
//     secret: process.env.AUTH_SECRET,
//     secureCookie: false,
//   });

//   if (!token) {
//     const redirectUrl = encodeURIComponent(request.url);

//     return NextResponse.redirect(
//       new URL(`/login?redirectUrl=${redirectUrl}`, request.url),
//     );
//   }

//   //const isGuest = guestRegex.test(token?.email ?? '');
// const isGuest =false;
//   if (token && !isGuest && ['/login', '/register'].includes(pathname)) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/',
//     '/chat/:id',
//     '/api/:path*',
//     '/login',
//     '/register',

//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico, sitemap.xml, robots.txt (metadata files)
//      */
//     '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
//   ],
// };



import { NextResponse, type NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  // Allow ping for Playwright tests
  if (pathname.startsWith('/ping')) {
    return new Response('pong', { status: 200 });
  }

  // Allow NextAuth API routes
  if (pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // Read JWT token from cookies
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
    secureCookie: process.env.NODE_ENV !== 'development',
  });

   if (pathname === '/') {
    return NextResponse.next();
  }
  console.log(token);
  // User is not logged in
  if (!token) {
    // Allow access to login/register
    if (pathname === '/login' || pathname === '/register') {
      return NextResponse.next();
    }
console.log(pathname);
    // Redirect unauthenticated users to login page
    const redirectUrl = encodeURIComponent(request.nextUrl.pathname);
    return NextResponse.redirect(new URL(`/login?redirectUrl=${redirectUrl}`, origin));
  }

  // User is logged in and tries to access /login or /register
  if (token && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/dashboard/overview', origin));
  }

  // Allow access to all other authenticated routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/', // Landing
    '/login',
    '/register',
    '/dashboard/:path*',
    '/chat/:id',
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};