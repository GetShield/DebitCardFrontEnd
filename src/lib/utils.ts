import { Price } from '@/features/wallets';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const formattedDate = new Date(date).toLocaleDateString('en-GB', options);
  const [day] = formattedDate.split('/');
  return `${day}`;
}

export function formatDateShort(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    month: '2-digit',
    day: '2-digit',
  };
  const formattedDate = new Date(date).toLocaleDateString('en-US', options);
  return formattedDate;
}

export function fromatCurrency(amount: number, digits = 2) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: digits,
  });
}

export function formatCrypto(amount: number, digits = 2) {
  return amount.toLocaleString('en-US', {
    style: 'decimal',
    maximumFractionDigits: digits,
  });
}

export function formatExpiry(expiry: string | undefined) {
  if (!expiry) return '';
  return `Exp ${expiry.slice(0, 2) + '/' + expiry.slice(2)}`;
}

export function formatTransactionCardExpiry(expiry: string | undefined) {
  if (!expiry) return '';
  return `${expiry.slice(0, 2) + '/20' + expiry.slice(2)}`;
}

export function formatCardNumber(cardNumber: string) {
  return cardNumber.replace(/(\d{4})/g, '$1 ').trim();
}

export const findPrice = (nativeSymbol: string, prices: Price[]) => {
  const { price } = prices.find((price) => price.name === nativeSymbol) || {
    price: 0,
  };
  return price;
};
