import { ErrorMessage } from '@hookform/error-message';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { LogoIcon } from '@/assets';
import { Button, Input } from '@/components';
import { RegisterSchema } from '../..';

interface Props {
  form: UseFormReturn<z.infer<typeof RegisterSchema>>;
  setStep: (step: number) => void;
}

const StepOne: React.FC<Props> = ({ form, setStep }) => {
  const {
    register,
    formState: { errors },
    setValue,
    trigger,
  } = form;

  const { getValues } = form;
  const { user_name, email } = getValues();

  const handleContinue = async () => {
    trigger(['user_name', 'email']);
    if (user_name && email && !errors.user_name && !errors.email) {
      setStep(2);
    }
  };

  return (
    <div className='m-auto flex w-96 max-w-[95vw] flex-col gap-2 rounded-lg border border-border p-4'>
      <div className='mb-5 flex flex-col items-center'>
        <LogoIcon />
        <span className='mb-2 mt-5 text-2xl font-bold'>Get started</span>
        <span className='text-sm text-muted-foreground'>
          Sign up in less than 2 minutes
        </span>
      </div>
      <Input
        placeholder='Enter your name'
        autoFocus
        {...register('user_name')}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleContinue();
          }
        }}
      />
      <ErrorMessage
        errors={errors}
        name='user_name'
        render={({ message }) => (
          <span className='text-sm text-destructive'>{message}</span>
        )}
      />
      <Input
        placeholder='Enter your email address'
        {...register('email')}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleContinue();
          }
        }}
      />
      <ErrorMessage
        errors={errors}
        name='email'
        render={({ message }) => (
          <span className='text-sm text-destructive'>{message}</span>
        )}
      />
      <Button
        type='button'
        variant='default'
        className='mt-2 py-4 text-sm font-medium tracking-wider'
        onClick={handleContinue}
      >
        Continue
      </Button>
    </div>
  );
};

export default StepOne;
