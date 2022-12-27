import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const builder =  new DocumentBuilder()
  .setTitle("SWAGGER")
    .setDescription("Flightbooking")
    .setVersion("v2.34")
    .setContact("Capstone Project", "/", "demo@gmail.com")
  .build();

const config = SwaggerModule.createDocument(app, builder);
  SwaggerModule.setup("api", app, config);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
AppService.clusterize(bootstrap);

