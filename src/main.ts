import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Proton Rest API')
    .setDescription('Proton Rest API')
    .setVersion('1.0')
    .addTag('Proton')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api', app, document);
  await app.listen(3003);
  console.log(`Application is running on:${await app.getUrl()}`)
  console.log(`Dir name:${__dirname + '../entities/{.ts,.js}'}`);
}
bootstrap();
