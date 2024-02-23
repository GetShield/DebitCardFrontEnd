import { z } from 'zod';

export const RegisterSchema = z
  .object({
    user_name: z
      .string()
      .min(3, {
        message: 'Name must be at least 3 characters long',
      })
      .max(60, {
        message: 'Name must be at most 60 characters long',
      }),
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: z
      .string()
      .min(3, {
        message: 'Password must be at least 3 characters long',
      })
      .max(60, {
        message: 'Password must be at most 60 characters long',
      }),
    passwordConfirm: z
      .string()
      .min(3, {
        message: 'Password must be at least 3 characters long',
      })
      .max(60, {
        message: 'Password must be at most 60 characters long',
      }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'Passwords do not match',
    path: ['passwordConfirm'],
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
