import { TAuthStatus } from '../../sdk/types';

export const AuthService = {
  getStatus(
    user: Express.Request['user'] | undefined,
  ): 'unauthorized' | TAuthStatus {
    if (!user) {
      return 'unauthorized';
    }
    return {
      user: {
        id: user.id,
        email: user.email,
      },
    };
  },
};
