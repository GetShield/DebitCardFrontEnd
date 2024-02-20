'use client';

import { cn, formatDate, fromatCurrency } from '@/lib';
import { useState } from 'react';
import { TransactionsPagination } from '.';
import { Transaction } from '../types';

interface Props {
  transactions: Transaction[] | undefined;
}

const TransactionsHistory: React.FC<Props> = ({ transactions }) => {
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

  return (
    <>
      <table className='w-full'>
        <thead>
          <tr className='border-b border-border text-left text-xs text-muted-foreground'>
            <th className='w-3/12 py-3 font-normal sm:w-1/5'>Date</th>
            <th className='w-6/12 px-4 py-3 font-normal sm:w-3/5'>
              Transaction
            </th>
            <th className='w-3/12 py-3 font-normal sm:w-1/5'>Amount</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-border border-b border-border'>
          {currentTransactions.map((transaction) => (
            <tr key={transaction.id} className='text-xs sm:text-sm'>
              <td className='py-6 text-muted-foreground'>
                {formatDate(transaction.user_transaction_time)}
              </td>
              <td className='px-4 py-6 font-semibold'>
                {transaction.merchant_name}
              </td>
              <td className='flex flex-col items-start py-6 text-left text-muted-foreground'>
                <span
                  className={cn('flex min-w-max', {
                    // ' text-green-500': transaction.type === 'income',
                  })}
                >
                  {/* {transaction.type === 'income' ? '+' : '-'}{' '} */}-{' '}
                  {transaction.amount}
                </span>
                {transaction.currency_code !== 'USD' && (
                  <span className='min-w-max'>
                    {/* {transaction.type === 'income' ? '+' : '-'}{' '} */}-{' '}
                    {fromatCurrency(transaction.amount, 0)}{' '}
                    {transaction.currency_code}
                  </span>
                )}
              </td>
            </tr>
          ))}
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
