import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CalendarService } from './calendar.service';

@Controller('calendar')
export class CalendarController {
  constructor(private calendarService: CalendarService) {}

  @Get(':id')
  async status(
    @Req() req: Request,
    @Param() params: any,
    @Res() res: Response,
  ) {
    const expressUser = req.user;

    /*const result = AuthService.getStatus(expressUser);
    if (result === 'unauthorized') {
      // TODO: Use guards for this: like "@UseGuards(LocalAuthGuard)"
      // Or use "req.isAuthenticated()" or "!req.user"?
      return res.sendStatus(401);
    }*/

    // TODO: Proper validation here
    // Validation
    /*const resultValidation = validationResult(req);
    if (!resultValidation.isEmpty()) {
      return res.status(400).send({ errors: resultValidation.array() });
    }*/
    const calendarId = parseInt(params?.id, 10);

    // Service call
    const calendar = this.calendarService.readCalendar(expressUser, calendarId);
    if (calendar === 'forbidden') {
      return res.sendStatus(403);
    }

    // Response
    if (!calendar) {
      return res.sendStatus(404);
    }
    return res.send(calendar);
  }
}
