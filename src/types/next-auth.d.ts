import 'next-auth';

declare module 'next-auth' {
  interface User {
    accessToken?: string;
    exp?: number;
  }

  interface JWT {
    accessToken?: string;
  }

  interface Session extends DefaultSession {
    accessToken?: string;
    user: {
      id: string;
      exp?: number;
    } & DefaultSession['user'];
    isExpired?: boolean;
  }
}
