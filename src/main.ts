import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove non-whitelisted properties
      transform: true, // automatically transform payloads to DTO instances
      forbidNonWhitelisted: true, // throw an error if non-whitelisted properties are present
      transformOptions: {
        enableImplicitConversion: true, // convert query params to their respective types (e.g. ?limit=10 -> { limit: 10 })
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
