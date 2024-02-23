'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button, Input, Modal } from '@/components';
import { ErrorMessage } from '@hookform/error-message';
import { Session } from 'next-auth';
import { format } from 'url';
import { postWallet } from '..';
import { WalletSchema, WalletSchemaType } from '../utils';

interface Props {
  session: Session | null;
  searchParams: { [key: string]: string };
}

const WalletForm: React.FC<Props> = ({ session, searchParams }) => {
  const { reload } = searchParams;
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<WalletSchemaType>({
    resolver: zodResolver(WalletSchema),
    mode: 'onChange',
    defaultValues: {
      blockchains: [reload],
      address: '',
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    register,
  } = form;

  const onSubmit: SubmitHandler<WalletSchemaType> = async (data) => {
    try {
      const res = await postWallet({ session, data });
      if (!res) {
        toast.error('Could not register wallet. Please try again.');
        return;
      } else {
        toast.success('Wallet registered successfully!');
        router.refresh();
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    const { register, ...restSearchParams } = searchParams;
    const url = format({
      pathname: pathname,
      query: { ...restSearchParams },
    });
    router.replace(url, { scroll: false });
  };

  return (
    <Modal onClose={handleClose}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='m-auto flex w-96 flex-col gap-2 rounded-md border border-border bg-background p-8 shadow-lg'
      >
        <span>
          <h2 className='font-medium'>Register Wallet</h2>
          <p className='text-sm text-muted-foreground'>
            Register your to be able to reload your balance
          </p>
        </span>
        <Input
          type='text'
          value={reload}
          disabled
          {...register('blockchains')}
        />
        <ErrorMessage
          errors={errors}
          name='blockchains'
          render={({ message }) => (
            <span className='text-sm text-destructive'>{message}</span>
          )}
        />
        <Input
          autoFocus
          placeholder={`Enter your ${reload} address`}
          required
          {...register('address')}
        />
        <ErrorMessage
          errors={errors}
          name='address'
          render={({ message }) => (
            <span className='text-sm text-destructive'>{message}</span>
          )}
        />
        <Button
          type='submit'
          variant='default'
          className='mt-2 py-3 text-sm font-medium tracking-wider'
          isLoading={isSubmitting}
        >
          Register address
        </Button>
      </form>
    </Modal>
  );
};

export default WalletForm;
