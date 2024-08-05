import { Controller, Get, Post, Request, Res, UseGuards } from '@nestjs/common';
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
  async login(@Res() res: any) {
    const successRedirect = getAppEndpoint();
    return res.redirect(successRedirect);
  }

  // @UseGuards(LocalAuthGuard)
  @Post('auth/status')
  async status(@Request() req: any) {
    // TODO: Use this data, after proper typing
    console.log(req.user);

    return JSON.stringify({
      user: {
        id: 3,
        email: 'ciao',
      },
    });
  }
}
