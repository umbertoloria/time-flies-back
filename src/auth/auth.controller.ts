import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { Request, Response } from 'express';
import { getAppEndpoint } from '../main';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Res() res: Response) {
    const successRedirect = getAppEndpoint();
    return res.redirect(successRedirect);
  }

  @UseGuards(LocalAuthGuard)
  @Get('status')
  async status(@Req() req: Request) {
    const { user } = req;
    if (!user) {
      return JSON.stringify({
        user: undefined,
      });
    }
    return JSON.stringify({
      user: {
        id: user.id,
        email: user.email,
      },
    });
  }
}
