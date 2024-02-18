import 'next-auth';

declare module 'next-auth' {
  interface User {
    accessToken?: string;
    exp?: number;
  }

  interface JWT {
    accessToken?: string;
  }
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}
