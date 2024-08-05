import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

// TODO: Remove "as any"

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (err: Error, user: any) => void): any {
    done(null as any, user);
  }

  deserializeUser(
    payload: any,
    done: (err: Error, payload: string) => void,
  ): any {
    done(null as any, payload);
  }
}
