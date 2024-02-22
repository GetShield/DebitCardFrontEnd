'use server';

import { Session } from 'next-auth';
import { Transactions } from '../types';

export const getTransactions = async (
  session: Session | null
): Promise<Transactions> => {
  try {
    const { accessToken } = session?.user;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions`, {
      next: { revalidate: 1 },
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error('Error fetching transactions');
    }

    const transactions = await res.json();

    return transactions;
  } catch (error) {
    console.error(error);
    return {
      page: { next: null },
      data: [],
    };
  }
};
