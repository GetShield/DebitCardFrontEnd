import { Session } from 'next-auth';
import { UserWallet, Wallet } from '..';

export const getWallets = async (
  session: Session | null
): Promise<Wallet[]> => {
  try {
    const { accessToken } = session?.user;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wallets/shield`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error('Error fetching wallets');
    }

    const data: { wallet: Wallet[] } = await res.json();
    const filteredWallets = data.wallet.filter(
      (w) => !w.blockchains[0].description.toLowerCase().includes('testnet')
    );
    return filteredWallets;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getUserWallets = async (
  session: Session | null
): Promise<UserWallet[]> => {
  try {
    console.log('getUserWallets');
    const { accessToken } = session?.user;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wallets/get-by-current-user`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error('Error fetching userWallets');
    }

    const data: { wallet: UserWallet[] } = await res.json();
    return data.wallet;
  } catch (error) {
    console.error(error);
    return [];
  }
};
