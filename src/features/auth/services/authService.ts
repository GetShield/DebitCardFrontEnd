import { handleError, validateResponse } from '@/lib';
import { RegisterSchemaType } from '..';

export const userService = {
  authenticate,
  register,
};

async function authenticate(
  credentials: Record<'email' | 'password', string> | undefined
) {
  try {
    const { email, password } = credentials || {};

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    validateResponse(res, 'Error authenticating user');

    const user = await res.json();
    const accessToken = user.token;

    return {
      name: user.user_name,
      id: user._id,
      ...credentials,
      accessToken,
    };
  } catch (error) {
    handleError(error, 'Could not authenticate');
  }
}

async function register(input: RegisterSchemaType) {
  try {
    const { email, password, user_name } = input;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_name, email, password }),
      }
    );

    validateResponse(res, 'Error registering user');

    const user = await res.json();

    return {
      user,
    };
  } catch (error) {
    handleError(error, 'Could not register');
  }
}
