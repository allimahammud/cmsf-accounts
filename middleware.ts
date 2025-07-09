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

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/dashboard/:path*'],
};