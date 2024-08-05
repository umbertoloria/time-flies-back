import { Injectable } from '@nestjs/common';
import { INUser, UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<INUser | null> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      return this.usersService.cleanINUser(user);
    }
    return null;
  }
}
