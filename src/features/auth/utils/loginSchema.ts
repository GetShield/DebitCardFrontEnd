import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }),
  password: z
    .string()
    .min(3, {
      message: 'Password must be at least 3 characters long',
    })
    .max(60, {
      message: 'Password must be at most 60 characters long',
    }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
