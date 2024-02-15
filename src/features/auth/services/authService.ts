export const userService = {
  authenticate,
};

function authenticate(email: string, password: string) {
  if (email !== 'test@test.com' && password !== 'test') {
    return null;
  }

  const user = {
    id: '9001',
    name: 'Test Name',
    email: 'test@test.com',
  };

  return user;
}
