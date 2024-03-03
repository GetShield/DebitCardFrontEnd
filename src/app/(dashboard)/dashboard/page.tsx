import { getServerSession } from 'next-auth';

import { BalanceDisplay, getBalances } from '@/features/balance';
import { DebitCards, getCards, getCardsFromRamp } from '@/features/debit-card';
import { TransactionsHistory, getTransactions } from '@/features/transactions';
import {
  Wallets,
  getPrices,
  getUserWallets,
  getWallets,
} from '@/features/wallets';
import { authOptions } from '@/lib';

interface Props {}

export default async function Page({}: Props) {
  const session = await getServerSession(authOptions);
  const [
    cards,
    rampCards,
    transactions,
    balances,
    wallets,
    userWallets,
    prices,
  ] = await Promise.all([
    getCards(session),
    getCardsFromRamp(session),
    getTransactions(session),
    getBalances(session),
    getWallets(session),
    getUserWallets(session),
    getPrices(session),
  ]);

  return (
    <div className='my-14 flex h-full min-h-screen w-full flex-col divide-x divide-border rounded-md border border-border lg:flex-row'>
      <div className='basis-2/6 divide-y divide-border'>
        <div className='flex flex-col gap-1 p-7'>
          <h2 className='font-medium'>Overview</h2>
          <p className='text-sm text-muted-foreground'>
            Manage and track your card spending
          </p>
        </div>
        <div className='flex flex-col items-center p-4 xs:p-7'>
          <DebitCards cards={cards} />
          <BalanceDisplay
            prices={prices}
            session={session}
            initialBalances={balances}
          />
        </div>
        <div className='flex w-full flex-col gap-2 p-7'>
          <h2 className='font-medium'>Reload</h2>
          <span className='text-xs text-muted-foreground'>
            Select network to reload your balance
          </span>
        </div>
        <div className='flex flex-col items-center gap-2 p-7'>
          <Wallets
            userWallets={userWallets}
            wallets={wallets}
            session={session}
          />
        </div>
      </div>
      <div className='basis-4/6 divide-y divide-border'>
        <div className='flex flex-col gap-1 p-7'>
          <h2 className='font-medium'>Transaction history</h2>
          <p className='text-sm text-muted-foreground'>
            Manage and track your track history
          </p>
        </div>
        <div className='p-4 sm:p-7'>
          <TransactionsHistory
            transactions={transactions}
            rampCards={rampCards}
          />
        </div>
      </div>
    </div>
  );
}
