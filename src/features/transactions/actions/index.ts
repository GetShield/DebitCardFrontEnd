'use server';

import { Session } from 'next-auth';

import { env } from '@/config';

import { Transaction } from '..';

export const getTransactions = async (
  session: Session | null
): Promise<Transaction[]> => {
  try {
    const { accessToken } = session?.user;
    const res = await fetch(
      `${env.NEXT_PUBLIC_API_URL}/transactions/ramp/get-by-current-user`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error('Error fetching transactions');
    }

    const transactions = (await res.json()) as Transaction[];

    return transactions;
  } catch (error) {
    console.error(error);
    return [];
  }
};
