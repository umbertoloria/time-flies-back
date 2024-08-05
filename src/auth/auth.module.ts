import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [PassportModule.register({ session: true })],
  providers: [LocalStrategy, SessionSerializer, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
