import { Session } from 'next-auth';

import { env } from '@/config';

import { Price } from '..';

export const getPrices = async (session: Session | null): Promise<Price[]> => {
  try {
    console.log('getPrices');
    const { accessToken } = session?.user;
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/wallets/price`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error('Error fetching prices');
    }

    const data: { data: Price[] } = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
