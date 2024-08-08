import { Injectable } from '@nestjs/common';
import { TCalendar } from '../sdk/types';
import { calendars } from './data';

@Injectable()
export class CalendarService {
  readCalendar(
    user: Express.User | undefined,
    calendarId: number,
  ): 'forbidden' | TCalendar | undefined {
    if (!user) {
      return 'forbidden';
    }
    return calendars.find((calendar) => calendar.id === calendarId);
  }
}
