import { Session } from 'next-auth';

import { env } from '@/config';
import { handleError } from '@/lib';

import { WalletSchemaType } from '../utils';

interface Props {
  session: Session | null;
  data: WalletSchemaType;
}

export const postWallet = async ({ session, data }: Props): Promise<any> => {
  try {
    console.log('postWallet');
    const { accessToken } = session?.user;
    const res = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/wallets/create-for-current-user`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || 'Error fetching prices');
    }

    return result;
  } catch (error) {
    handleError(error, 'Could not post wallet');
  }
};
