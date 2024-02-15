'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';
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
      await new Promise((resolve) =>
        setTimeout(() => {
          localStorage.setItem(
            'user',
            JSON.stringify({
              name: data.name,
              email: data.email,
              token: '123456',
            })
          );
          resolve(null);
        }, 3000)
      );
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
