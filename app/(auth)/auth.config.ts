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

/////////////////////closd 21-jul-25////////////////
// import type { NextAuthConfig }  from 'next-auth';
// import type { DefaultJWT } from 'next-auth/jwt';
// import NextAuth, { type DefaultSession } from 'next-auth';

// declare module 'next-auth' {
//   interface Session extends DefaultSession {
//     user: {
//       id: string;
//       email: string;
//        name: string;
//     } & DefaultSession['user'];
//   }

//   interface User {
//     id?: string;
//     email?: string | null;
//     //type: UserType;
//      name: string;
//   }
// }

// declare module 'next-auth/jwt' {
//   interface JWT extends DefaultJWT {
//     id: string;
//     email: string;
//      name: string;

//   }
// }

// export const authConfig:NextAuthConfig  = {
//   pages: {
//     signIn: '/login',
//   },
//   session: {
//     strategy: 'jwt', // Enable JWT session
//   },
//   secret: process.env.AUTH_SECRET,
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id =  (user as { id: string }).id;;
//         token.email = (user as { email: string }).email;
//         token.name = (user as { name: string }).name;;
//        // token.role = user.role; // If your DB has roles
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//          session.user.id = (token as { id: string }).id;
//          session.user.email = token.email as string;
//          session.user.name = token.name as string;
//         // session.user.role = (token as { role?: string }).role;
//       }
//       return session;
//     },
//     authorized({ auth, request: { nextUrl } }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

//       if (isOnDashboard) {
//         if (isLoggedIn) return true;
//         return false; // Will trigger redirect to signIn page
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL('/dashboard', nextUrl));
//       }
//       return true;
//     },
//   },
//   providers: [], // You need to add actual providers here, e.g., GitHub, Google, etc.
// } satisfies NextAuthConfig;

import type { NextAuthConfig } from 'next-auth';
//console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET);

export const authConfig = {
  pages: {
    signIn: '/login',
    newUser: '/',
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt', // default
  },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {},
} satisfies NextAuthConfig;
