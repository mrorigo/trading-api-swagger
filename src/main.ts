import { AppModule } from './app.module';
import { BrokerBaseAccount } from './api/dtos/broker-account-base-information.dto';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { InstrumentType } from './api/enums/instrument-type';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useGlobalPipes(new ValidationPipe({ whitelist: false }));
    app.enableCors();
    const document = SwaggerModule.createDocument(
      app,

      new DocumentBuilder()
        .setTitle('Trading212 Api')
        .setDescription('The Trading 212 Api swagger Documentation')
        .setVersion('1.0')
        .addCookieAuth('cookie')
        .build(),
      {
        extraModels: [BrokerBaseAccount],
      },
    );
    SwaggerModule.setup('/swagger', app, document);

    await app.listen(3000);
    console.log('app started');
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
