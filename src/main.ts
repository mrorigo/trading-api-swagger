import * as fs from 'fs';
import { AppModule } from './app.module';
import { BrokerBaseAccount } from './api/dtos/broker-account-base-information.dto';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
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
        .setVersion('1.0')
        .addCookieAuth('cookie')
        .setBasePath('https://live.trading212.com')
        .setDescription(
          '<hr></br><b>SET ORDER:</b></br>there is only one endpoint for sell and buy orders. you define the direction with the quantity. </br> NEGATIVE = SELL </br> POSITIVE = BUY </br></br></br><b> GET ORDER:</b> </br>to get open orders use the user-reports endpoints or filter the position/if-then array in the account stats.</br></br></br> <b>AUTHENTICATION:</b> </br> get the cookie out of the developer tools from your browser. </br>it´s not the best way, but the login endpoint is to difficult for my swagger experiences. </br>if you are using the browser cookie, DO NOT CLOSE the window or re-login in another browser. that will make your cookie invalid.</br> if you have a smarter solution feel free to contact me;)</br></br><hr>',
        )
        .build(),
      {
        extraModels: [BrokerBaseAccount],
      },
    );
    fs.writeFileSync('./swagger-trading212-api.json', JSON.stringify(document));
    SwaggerModule.setup('/swagger', app, document);

    await app.listen(3000);
    console.log('app started');
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
