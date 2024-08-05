import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type INUser = {
  userId: number;
  username: string;
};
type DBUser = INUser & {
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: DBUser[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
    {
      userId: 3,
      username: 'test@test.test',
      password: 'test',
    },
  ];

  async findOne(username: string): Promise<DBUser | undefined> {
    return this.users.find((user) => user.username === username);
  }

  cleanINUser(user: DBUser): INUser {
    return {
      userId: user.userId,
      username: user.username,
    };
  }
}
