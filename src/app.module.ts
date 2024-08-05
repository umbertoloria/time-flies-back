import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { CalendarController } from './calendar/calendar.controller';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  controllers: [AppController, AuthController, CalendarController],
  providers: [AppService],
})
export class AppModule {}
