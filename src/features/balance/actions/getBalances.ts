import { Session } from 'next-auth';

import { env } from '@/config';

import { Balance } from '../types';

export const getBalances = async (
  session: Session | null
): Promise<Balance[]> => {
  try {
    console.log('getBalances');
    const { accessToken } = session?.user;
    const res = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/balances/get-by-current-user`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error('Error fetching balances');
    }

    const data: { balances: Balance[] } = await res.json();
    const filteredBalances = data.balances;
    // const filteredBalances = data.balances.filter(
    //   (b) => !b.blockchain.description.toLowerCase().includes('testnet')
    // );
    return filteredBalances;
  } catch (error) {
    console.error(error);
    return [];
  }
};
