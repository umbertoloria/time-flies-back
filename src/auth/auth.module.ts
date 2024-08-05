import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Module({
  imports: [PassportModule.register({ session: true })],
  providers: [LocalStrategy, SessionSerializer, AuthService, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
