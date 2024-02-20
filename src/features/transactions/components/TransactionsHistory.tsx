'use client';

import { VisaIcon } from '@/assets';
import { RampCard } from '@/features/debit-card';
import {
  cn,
  formatDate,
  formatDateShort,
  formatTransactionCardExpiry,
} from '@/lib';
import { useState } from 'react';
import { TransactionsPagination } from '.';
import { Transaction } from '../types';

interface Props {
  transactions: Transaction[] | undefined;
  rampCards: RampCard[];
}

const TransactionsHistory: React.FC<Props> = ({ transactions, rampCards }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!transactions || transactions.length === 0) {
    return (
      <div className='flex h-64 flex-col items-center justify-center text-muted-foreground'>
        <p className='mb-2'>No transactions yet</p>
        <p className='text-xs'>All your transactions will appear here</p>
      </div>
    );
  }

  const transactionsPerPage = 13;

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const findCard = (cardId: string) => {
    return rampCards.find((card) => card.id === cardId);
  };

  return (
    <>
      <table className='w-full'>
        <thead>
          <tr className='border-b border-border text-left text-xs text-muted-foreground'>
            <th className='w-2/12 py-3 font-normal lg:w-1/6'>Date</th>
            <th className='w-6/12 px-4 py-3 font-normal lg:w-3/6'>
              Transaction
            </th>
            <th className='w-2/12 py-3 font-normal lg:w-1/6'>Amount</th>
            <th className='w-2/12 py-3 pl-4 font-normal lg:w-1/6'>Card</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-border border-b border-border'>
          {currentTransactions.map((transaction) => {
            const card = findCard(transaction.card_id);
            return (
              <tr key={transaction.id} className='text-xs lg:text-sm'>
                <td className='py-6 text-muted-foreground'>
                  <TransactionDate date={transaction.user_transaction_time} />
                </td>
                <td className='px-4 py-6 font-semibold'>
                  {transaction.merchant_name}
                </td>
                <td className='py-6 text-left text-muted-foreground'>
                  <span className={cn('flex min-w-max', {})}>
                    - {transaction.amount}
                  </span>
                </td>
                <td className='px-4 py-6'>
                  <div className='flex items-center gap-2 sm:gap-4'>
                    <VisaIcon className='hidden h-10 w-10 xs:flex sm:h-16 sm:w-16' />
                    <div className='flex min-w-fit flex-col'>
                      <span className='w-fit min-w-fit font-medium'>
                        Visa {card?.last_four || '****'}
                      </span>
                      <span className='text-xs text-muted-foreground'>
                        {formatTransactionCardExpiry(card?.expiration)}
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <TransactionsPagination
        paginate={paginate}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default TransactionsHistory;

const TransactionDate = ({ date }: { date: string }) => {
  return (
    <>
      <span className='hidden lg:flex'>{formatDate(date)}</span>
      <span className='lg:hidden'>{formatDateShort(date)}</span>
    </>
  );
};
