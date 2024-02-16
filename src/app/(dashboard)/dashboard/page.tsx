import { transactions } from '@/data';
import { Balance, Reload } from '@/features/balance';
import { DebitCards } from '@/features/debit-card';
import { TransactionsHistory } from '@/features/transactions';

export default function Page() {
  return (
    <div className='my-14 flex h-full min-h-screen w-full flex-col divide-x divide-border rounded-md border border-border md:flex-row'>
      <div className='basis-2/6 divide-y divide-border'>
        <div className='flex flex-col gap-1 p-7'>
          <h2 className='font-medium'>Overview</h2>
          <p className='text-sm text-muted-foreground'>
            Manage and track your card spending
          </p>
        </div>
        <div className='flex flex-col items-center p-7'>
          <DebitCards />
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
        <div className='p-7'>
          <TransactionsHistory transactions={transactions} />
        </div>
      </div>
    </div>
  );
}
