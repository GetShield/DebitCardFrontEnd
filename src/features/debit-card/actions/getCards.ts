'use server';

import { authOptions } from '@/lib';
import { getServerSession } from 'next-auth';
import { Card } from '../types';

export const getCards = async (): Promise<Card[]> => {
  try {
    const session = await getServerSession(authOptions);
    const { accessToken } = session?.user;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cards`, {
      next: { revalidate: 1 },
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error('Error fetching cards');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
