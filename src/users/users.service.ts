import { Injectable } from '@nestjs/common';

export type INUser = {
  id: number;
  email: string;
  username: string;
};
type DBUser = INUser & {
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: DBUser[] = [
    {
      id: 1,
      email: 'test@test.test',
      username: 'test@test.test',
      password: 'test',
    },
  ];

  async findOne(username: string): Promise<DBUser | undefined> {
    return this.users.find((user) => user.username === username);
  }

  cleanINUser(user: DBUser): INUser {
    return {
      id: user.id,
      email: user.email,
      username: user.username,
    };
  }
}
