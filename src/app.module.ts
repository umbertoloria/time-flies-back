import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { CalendarController } from './calendar/calendar.controller';
import { CalendarService } from './calendar/calendar.service';
import { UserService } from './user/user.service';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  controllers: [AppController, AuthController, CalendarController],
  providers: [AppService, AuthService, CalendarService, UserService],
})
export class AppModule {}
