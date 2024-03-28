'use server';

import { Session } from 'next-auth';

import { env } from '@/config';

import { Card, RampCard } from '../types';

export const getCards = async (session: Session | null): Promise<Card[]> => {
  try {
    const { accessToken } = session?.user;
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/cards`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error('Error fetching cards');
    }

    const cards = await res.json();
    return cards;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCardsFromRamp = async (
  session: Session | null
): Promise<RampCard[]> => {
  try {
    const { accessToken } = session?.user;
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/cards/ramp`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error('Error fetching cards');
    }

    const cards = await res.json();
    return cards;
  } catch (error) {
    console.error(error);
    return [];
  }
};
