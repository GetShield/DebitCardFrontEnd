'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button, Input, Modal } from '@/components';
import { ErrorMessage } from '@hookform/error-message';
import { Session } from 'next-auth';
import { postWallet } from '..';
import { WalletSchema, WalletSchemaType } from '../utils';

interface Props {
  session: Session | null;
  blockchain: string;
  onClose: () => void;
}

const WalletForm: React.FC<Props> = ({ session, blockchain, onClose }) => {
  const router = useRouter();

  const form = useForm<WalletSchemaType>({
    resolver: zodResolver(WalletSchema),
    mode: 'onChange',
    defaultValues: {
      blockchains: [blockchain],
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal onClose={onClose}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='m-auto flex w-96 flex-col gap-2 rounded-md border border-border bg-background p-8 shadow-lg'
      >
        <span>
          <h2 className='font-medium'>Register Wallet</h2>
          <p className='text-sm text-muted-foreground'>
            Register your {blockchain} address to be able to reload your balance
          </p>
        </span>
        <Input
          type='text'
          value={blockchain}
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
          placeholder={`Enter your ${blockchain} address`}
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
