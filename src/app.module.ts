import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
