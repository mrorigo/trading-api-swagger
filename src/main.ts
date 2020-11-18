import { AppModule } from './app.module';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: false }));
  app.enableCors();
  const document: OpenAPIObject = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Trading212 Api')
      .setDescription('The Trading 212 Api swagger Documentation')
      .setVersion('1.0')
      .addCookieAuth('cookie')
      .build(),
  );
  SwaggerModule.setup('/swagger', app, document);

  await app.listen(3000);
  console.log('app started');
}
bootstrap();
