import { Session } from 'next-auth';
import { Balance } from '../types';

export const getBalances = async (
  session: Session | null
): Promise<Balance[]> => {
  try {
    const { accessToken } = session?.user;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/balances/get-by-user`,
      {
        next: { revalidate: 1 },
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

    const balances = await res.json();
    return balances;
  } catch (error) {
    console.error(error);
    return [];
  }
};
