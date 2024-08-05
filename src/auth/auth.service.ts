import { Injectable } from '@nestjs/common';
import { TAuthStatus } from '../legacy/src/sdk/types';

@Injectable()
export class AuthService {
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
  }
}
