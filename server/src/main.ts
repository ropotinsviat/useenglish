import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(__dirname, `../.${process.env.NODE_ENV}.env`),
});

import { NestFactory } from '@nestjs/core';
import config from './config';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(config.app.cors);

  await app.listen(config.app.port, () =>
    console.log(`🚀 Server listening on port ${config.app.port}`),
  );
}

start();
