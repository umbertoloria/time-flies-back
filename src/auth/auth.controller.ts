import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { LocalAuthGuard } from './local-auth.guard';
import { getAppEndpoint } from '../legacy/src/endpoints';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Res() res: Response) {
    const successRedirect = getAppEndpoint();
    return res.redirect(successRedirect);
  }

  @UseGuards(LocalAuthGuard)
  @Get('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    req.logout((err) => {
      if (err) {
        // FIXME
        throw err;
      }
      return res.redirect(getAppEndpoint());
    });
  }

  // @UseGuards(LocalAuthGuard)
  @Get('status')
  async status(@Req() req: Request, @Res() res: Response) {
    const expressUser = req.user;

    const result = this.authService.getStatus(expressUser);
    if (result === 'unauthorized') {
      // Or use "req.isAuthenticated()" or "!req.user"?
      return res.sendStatus(401);
    }
    return res.send(result);
  }
}
