import { Coins } from '@/features/balance/types';

export interface Transaction {
  amountInBaseCurrency: number;
  amount: number;
  coin: Coins;
  date: string;
  description: string;
  id: string;
  type: TrasactionType;
}

export type TrasactionType = 'income' | 'expense';
