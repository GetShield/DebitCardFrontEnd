import { z } from 'zod';

export const WalletSchema = z.object({
  address: z.string(),
  blockchains: z.array(z.string()),
  // address: z.custom<string>(isAddress, "Invalid Address")
});

export type WalletSchemaType = z.infer<typeof WalletSchema>;
