'use client';

import { ErrorMessage } from '@hookform/error-message';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

import { LogoIcon } from '@/assets';
import { Button, Input } from '@/components';
import { RegisterSchema } from '../..';

interface Props {
  form: UseFormReturn<z.infer<typeof RegisterSchema>>;
}

const StepTwo: React.FC<Props> = ({ form }) => {
  const {
    register,
    formState: { errors, isSubmitting },
    getValues,
  } = form;
  const { password } = getValues();

  return (
    <div className='m-auto flex w-96 max-w-[95vw] flex-col gap-2 rounded-lg border border-border p-4'>
      <div className='mb-5 flex flex-col items-center'>
        <LogoIcon />
        <span className='mb-2 mt-5 text-2xl font-bold'>Choose a password</span>
      </div>
      <Input
        autoComplete='new-password'
        placeholder='Choose a password'
        type='password'
        {...register('password')}
      />
      <ErrorMessage
        errors={errors}
        name='password'
        render={({ message }) => (
          <span className='text-sm text-destructive'>{message}</span>
        )}
      />
      <Input
        autoComplete='new-password'
        placeholder='Confirm password'
        type='password'
        {...register('passwordConfirm', {
          validate: (value) =>
            value === password || 'The passwords do not match',
        })}
      />
      <ErrorMessage
        errors={errors}
        name='passwordConfirm'
        render={({ message }) => (
          <span className='text-sm text-destructive'>{message}</span>
        )}
      />
      <Button
        className='mt-2 py-4 text-sm font-medium tracking-wider'
        isLoading={isSubmitting}
        type='submit'
        variant='default'
        isDisabled={isSubmitting}
      >
        Get started
      </Button>
    </div>
  );
};

export default StepTwo;
