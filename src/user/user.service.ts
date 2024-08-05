import { Injectable } from '@nestjs/common';

type DBUser = {
  id: number;
  email: string;
  username: string;
  password: string;
};

const users: readonly DBUser[] = [
  {
    id: 1,
    email: 'test@test.test',
    username: 'test@test.test',
    password: 'test',
  },
] as const;

@Injectable()
export class UserService {
  findUserByEmailAndPassword(email: string, password: string) {
    /*db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, row) {
      if (err) { return cb(err); }
      if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

      crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
        if (err) { return cb(err); }
        if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
          return cb(null, false, { message: 'Incorrect username or password.' });
        }
        return cb(null, row);
      });
    });*/
    return users.find(
      (user: any) => user.email === email && user.password === password,
    );
  }

  findUserByID(id: number) {
    return users.find((user: any) => user.id === id);
  }
}
