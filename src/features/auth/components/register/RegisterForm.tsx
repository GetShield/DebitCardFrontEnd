'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { userService } from '@/features/auth';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { RegisterSchema, RegisterSchemaType } from '../..';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import Steps from './Steps';

interface Props {}

const RegisterForm: React.FC<Props> = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    mode: 'onChange',
  });
  const { handleSubmit } = form;

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (data) => {
    try {
      const res = await userService.register(data);
      if (!res) {
        toast.error('Could not register');
        return;
      } else {
        toast.success('Registered successfully');
        await signIn('credentials', {
          ...data,
          redirect: false,
        });
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const STEPS = {
    1: <StepOne form={form} setStep={setStep} />,
    2: <StepTwo form={form} />,
  };

  return (
    <div className='flex min-h-screen w-screen flex-col'>
      <form onSubmit={handleSubmit(onSubmit)} className='m-auto flex flex-col'>
        {STEPS[step as keyof typeof STEPS]}
      </form>
      <Steps step={step} />
    </div>
  );
};

export default RegisterForm;
