// import NextAuth from 'next-auth';
// import Credentials from 'next-auth/providers/credentials';
// import { authConfig } from './auth.config';
// import { z } from 'zod';
// import type { User } from '@/app/lib/definitions';
// import bcrypt from 'bcrypt';
// import postgres from 'postgres';

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require', prepare: false });

// async function getUser(email: string): Promise<User | undefined> {
//   try {
//     const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
//     return user[0];
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }

// export const { auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [
//     Credentials({
//       async authorize(credentials) {
//         const parsedCredentials = z
//           .object({ email: z.string().email(), password: z.string().min(6) })
//           .safeParse(credentials);

//         if (parsedCredentials.success) {
//           const { email, password } = parsedCredentials.data;

//           const user = await getUser(email);
//           if (!user) return null;
//           const passwordsMatch = await bcrypt.compare(password, user.password);

//           if (passwordsMatch) return user;
//         }

//         console.log('Invalid credentials');
//         return null;
//         //return { id: user.id, name: user.name, email: user.email, role: user.role };
//       },
//     }),
//   ],
// });

import { compare } from 'bcrypt';
import NextAuth, { type DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
//import { createGuestUser, getUser } from '@/lib/db/queries';
import { authConfig } from './auth.config';
//import { DUMMY_PASSWORD } from '@/lib/constants';
import type { DefaultJWT } from 'next-auth/jwt';

import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { user, type User } from '@/app/lib/db/schema';
//import type { ArtifactKind } from '@/components/artifact';
//import { generateUUID } from '../utils';
//import { generateHashedPassword } from './utils';
//import type { VisibilityType } from '@/components/visibility-selector';
import { ChatSDKError } from '../lib/errors';

export type UserType = 'guest' | 'regular';

const client = postgres(process.env.POSTGRES_URL!);
//console.log('AUTH_SECRET:', process.env.POSTGRES_URL);
//const queryClient = postgres(process.env.POSTGRES_URL!);
//console.log('AUTH_SECRET:', queryClient);
const db = drizzle(client);

export async function getUser(email: string): Promise<Array<User>> {
  try {
    return await db.select().from(user).where(eq(user.email, email));
  } catch (error) {
    throw new ChatSDKError(
      'bad_request:database',
      'Failed to get user by email ' + error
    );
  }
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      type: UserType;
    } & DefaultSession['user'];
  }

  interface User {
    id?: string;
    email?: string | null;
    type: UserType;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string;
    type: UserType;
  }
}
// handlers: { GET, POST },
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {},
      // async authorize({ email, password }: any) {
      async authorize(credentials: Record<string, unknown>) {
        const email = credentials.email as string;
        const password = credentials.password as string;

        const users = await getUser(email);

        if (users.length === 0) {
          //await compare(password, DUMMY_PASSWORD);
          return null;
        }

        const [user] = users;

        if (!user.password) {
          // await compare(password, DUMMY_PASSWORD);
          return null;
        }

        const passwordsMatch = await compare(password, user.password);
        // const passwordsMatch=true;

        if (!passwordsMatch) return null;

        //return { ...user, type: 'regular' };
        return {
          id: user.id,

          type: 'regular',
          name: user.name,
        };
      },
    }),
    // Credentials({
    //   id: 'guest',
    //   credentials: {},
    //   async authorize() {
    //     const [guestUser] = await createGuestUser();
    //     return { ...guestUser, type: 'guest' };
    //   },
    // }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.type = user.type;
        token.name = user.name;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.type = token.type;
        session.user.name = token.name;
      }

      return session;
    },
  },
});
export const GET = handlers.GET;
export const POST = handlers.POST;
