import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { getAppEndpoint } from './main';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Res() res: Response) {
    const successRedirect = getAppEndpoint();
    return res.redirect(successRedirect);
  }

  // @UseGuards(LocalAuthGuard)
  @Get('auth/status')
  async status(@Req() req: Request) {
    const { user } = req;
    if (!user) {
      return JSON.stringify({
        user: undefined,
      });
    }
    return JSON.stringify({
      user: {
        id: user.userId,
        email: user.email,
      },
    });
  }
}
