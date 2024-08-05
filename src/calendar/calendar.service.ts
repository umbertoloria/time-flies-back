import { Injectable } from '@nestjs/common';
import { TCalendar } from '../sdk/types';
import { calendar1, calendar2, calendar3, calendar4 } from "./data";

@Injectable()
export class CalendarService {
  readCalendar(
    user: Express.User | undefined,
    calendarId: number,
  ): 'forbidden' | TCalendar | undefined {
    if (!user) {
      return 'forbidden';
    }

    let calendar = undefined;
    if (calendarId === 1) {
      calendar = calendar1;
    } else if (calendarId === 2) {
      calendar = calendar2;
    } else if (calendarId === 3) {
      calendar = calendar3;
    } else if (calendarId === 4) {
      calendar = calendar4;
    }
    return calendar;
  }
}
