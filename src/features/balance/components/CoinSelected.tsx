interface Props {
  selectedCoin: string;
}

const CoinSelected: React.FC<Props> = ({ selectedCoin }) => {
  return (
    <div className='flex w-full items-center gap-3 rounded-3xl border border-primary px-4 py-2'>
      <div className='rounded-full border border-primary p-1'>
        <div className='h-3 w-3 rounded-full border bg-primary'></div>
      </div>
      <span className='text-sm font-semibold'>{selectedCoin}</span>
    </div>
  );
};

export default CoinSelected;
