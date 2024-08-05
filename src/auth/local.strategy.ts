import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from '../user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super();
  }

  async validate(username: string, password: string): Promise<Request['user']> {
    const dbUser = this.userService.findUserByEmailAndPassword(
      username,
      password,
    );
    if (!dbUser) {
      throw { message: 'Incorrect username or password.' };
    }
    return {
      id: dbUser.id,
      email: dbUser.email,
    };
  }
}
