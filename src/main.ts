import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

export const getAppEndpoint = (): string => {
  const frontEndEndpoint = process.env.FRONTEND_ENDPOINT;
  if (!frontEndEndpoint) {
    throw new Error('Invalid App Endpoint');
  }
  return frontEndEndpoint;
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'keyboard',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  app.enableCors({
    origin: getAppEndpoint(),
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  });

  await app.listen(8000);
}

bootstrap();
