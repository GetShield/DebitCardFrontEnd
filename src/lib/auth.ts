import { getServerSession, type NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { userService } from '@/features/auth';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, profile, user }) {
      if (account && account.type === 'credentials') {
        token.userId = account.providerAccountId;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token, user, ...rest }) {
      session.user.id = token.userId;
      session.user.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        return await userService.authenticate(credentials);
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
