'use client';

import { BtcIcon, EthIcon, USIcon, UsdtIcon } from '@/assets';
import { Price } from '@/features/wallets';
import { fromatCurrency } from '@/lib';
import { Session } from 'next-auth';
import { Balance } from '../types';

interface Props {
  prices: Price[];
  initialBalances: Balance[];
  session: Session | null;
}

const BalanceDisplay: React.FC<Props> = ({
  prices,
  initialBalances,
  session,
}) => {
  const balances = initialBalances;
  // const [balances, setBalances] = useState<Balance[]>(initialBalances);

  const COINS = [
    { name: 'BTC', largeName: 'Bitcoin', icon: <BtcIcon /> },
    { name: 'ETH', largeName: 'Ethereum', icon: <EthIcon /> },
    { name: 'USDT', largeName: 'Tron', icon: <UsdtIcon /> },
  ];

  const totalBalance = balances?.reduce((acc, balance) => {
    const { price } = prices.find(
      (price) => price.name === balance.blockchain.nativeSymbol
    ) || {
      price: 0,
    };
    return acc + balance.amount * price;
  }, 0);

  const totalBalanceFormatted = fromatCurrency(totalBalance);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const fetchBalances = async () => {
  //       const newBalances = await getBalances(session);
  //       setBalances(newBalances);
  //     };

  //     fetchBalances();
  //   }, 10000);

  //   return () => clearInterval(interval);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className='flex w-full flex-col py-6 text-muted-foreground'>
      <span>Your balance</span>
      <span className='select-none text-xs'>
        Balances are updated every 5 minutes
      </span>
      <div className='mb-5 mt-2 flex items-center gap-5'>
        <USIcon className='scale-[2.0]' />
        <span className='text-3xl font-extrabold text-foreground'>
          {totalBalanceFormatted}
        </span>
      </div>
      <div className='flex flex-col gap-3 text-sm sm:text-base'>
        {/* <div className='flex items-center justify-between'>
          <span>Total Balance (BTC & USDT)</span>
          <div className='flex items-center gap-1'>
            <USIcon />
            <span className='font-bold text-foreground'>
              {totalBalanceFormatted}
            </span>
          </div>
        </div> */}
        {balances.map((balance) => {
          const coin = COINS.find((coin) => coin.name === balance.currency);
          const { name, price } = prices.find(
            (price) => price.name === balance.currency
          ) || { name: '', price: 0 };
          return (
            <div
              key={balance._id}
              className='flex items-center justify-between gap-2'
            >
              {balance.blockchain.chain}
              <div className='flex min-w-fit items-center gap-1'>
                <div>{coin?.icon}</div>
                <span className='font-bold text-foreground'>
                  {balance.amount} {balance.blockchain.chain} | USD{' '}
                  {fromatCurrency(balance.amount * price, 0)}
                </span>
              </div>
            </div>
          );
        })}
        {/* <div className='flex items-center justify-between'>
          <span>Total Balance (BTC & USDT)</span>
          <div className='flex items-center gap-1'>
            <USIcon />
            <span className='font-bold text-foreground'>$47,642.20</span>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <span>BTC Token Balance</span>
          <div className='flex items-center gap-1'>
            <BtcIcon />
            <span className='font-bold text-foreground'>$2.058 BTC</span>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <span>USDT Token Balance</span>
          <div className='flex items-center gap-1'>
            <UsdtIcon />
            <span className='font-bold text-foreground'>$2,300 USDT</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BalanceDisplay;
