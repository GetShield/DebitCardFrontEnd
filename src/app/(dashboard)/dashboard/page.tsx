import { Balance, Reload } from '@/features/balance';
import { DebitCards, getCards, getCardsFromRamp } from '@/features/debit-card';
import { TransactionsHistory, getTransactions } from '@/features/transactions';

export default async function Page() {
  const [cards, rampCards, transactions] = await Promise.all([
    getCards(),
    getCardsFromRamp(),
    getTransactions(),
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
          <Balance />
        </div>
        <div className='flex w-full flex-col gap-2 p-7'>
          <h2 className='font-medium'>Reload</h2>
          <span className='text-xs text-muted-foreground'>
            Select network to reload your balance
          </span>
        </div>
        <div className='flex flex-col items-center gap-2 p-7'>
          <Reload />
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
            transactions={transactions.data}
            rampCards={rampCards}
          />
        </div>
      </div>
    </div>
  );
}
