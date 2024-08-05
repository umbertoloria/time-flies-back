import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule.register({ session: true })],
  providers: [LocalStrategy, SessionSerializer],
  controllers: [AuthController],
})
export class AuthModule {}
