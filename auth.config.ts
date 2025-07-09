////////////// SR DEV//////////////
// import NextAuth from 'next-auth';
// import GitHub from 'next-auth/providers/github';
// import type { NextAuthConfig } from 'next-auth';

// export const config: NextAuthConfig = {
//   providers: [
//     GitHub({
//       clientId: process.env.GITHUB_ID!,
//       clientSecret: process.env.GITHUB_SECRET!,
//     }),
//   ],
//   pages: {
//     signIn: '/login',
//   },
// };

// export const { handlers, auth, signIn, signOut } = NextAuth(config);

// // API route handlers
// export const GET = handlers.GET;
// export const POST = handlers.POST;


// import type { NextAuthConfig } from 'next-auth';
 
// export const authConfig = {
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
//       if (isOnDashboard) {
//         if (isLoggedIn) return true;
//         return false; // Redirect unauthenticated users to login page
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL('/dashboard', nextUrl));
//       }
//       return true;
//     },
//   },
//   providers: [], // Add providers with an empty array for now
// } satisfies NextAuthConfig;



import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Will trigger redirect to signIn page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // You need to add actual providers here, e.g., GitHub, Google, etc.
} satisfies NextAuthConfig;
