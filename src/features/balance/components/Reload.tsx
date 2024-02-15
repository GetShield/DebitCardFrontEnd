interface Props {}

const Reload: React.FC<Props> = () => {
  const COINS = [
    { name: 'BTC', largeName: 'Bitcoin' },
    { name: 'ETH', largeName: 'Ethereum' },
    { name: 'USDT', largeName: 'Tron' },
  ];

  return (
    <div className='flex items-center divide-x divide-muted-foreground overflow-auto rounded-3xl border border-muted-foreground'>
      {COINS.map((coin, index) => {
        return (
          <button
            key={index}
            className='flex min-w-24 items-center gap-3 px-5 py-1.5 text-center'
          >
            {coin.largeName}
          </button>
        );
      })}
    </div>
  );
};

export default Reload;
