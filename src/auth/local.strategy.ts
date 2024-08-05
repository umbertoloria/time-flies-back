import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UserRepo } from '../legacy/src/services/auth/UserRepo';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  async validate(username: string, password: string): Promise<Request['user']> {
    const dbUser = UserRepo.findUserByEmailAndPassword(username, password);
    if (!dbUser) {
      throw { message: 'Incorrect username or password.' };
    }
    return {
      id: dbUser.id,
      email: dbUser.email,
    };
  }
}
