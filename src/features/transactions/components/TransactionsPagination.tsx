import { cn } from '@/lib';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  paginate: (pageNumber: number) => void;
  currentPage: number;
  totalPages: number;
}

const TransactionsPagination: React.FC<Props> = ({
  paginate,
  currentPage,
  totalPages,
}) => {
  const className =
    'flex items-center justify-between border text-foreground font-medium border-muted-foreground/50 text-sm py-1.5 gap-1 px-3 hover:bg-muted-foreground/10 active:bg-muted-foreground/20 disabled:bg-none disabled:text-muted-foreground/50';

  return (
    <div className='flex items-center justify-between pt-4'>
      <button
        className={cn(className, 'rounded-l-3xl', {
          'cursor-not-allowed': currentPage === 1,
        })}
        disabled={currentPage === 1}
        onClick={() => {
          if (currentPage > 1) {
            paginate(currentPage - 1);
          }
        }}
      >
        <ArrowLeft className='h-5' />
        Previous
      </button>
      <span className='text-xs text-muted-foreground'>
        {currentPage} of {totalPages}
      </span>
      <button
        className={cn(className, 'rounded-r-3xl', {
          'cursor-not-allowed': currentPage === totalPages,
        })}
        disabled={currentPage === totalPages}
        onClick={() => {
          if (currentPage < totalPages) {
            paginate(currentPage + 1);
          }
        }}
      >
        Next <ArrowRight className='h-5' />
      </button>
    </div>
  );
};

export default TransactionsPagination;
