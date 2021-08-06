import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client:{
        // brokers: ['localhost:9092', 'localhost:9095', 'localhost:9097']
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'movies-sec-consumer'
      }
    }
  })

  app.listen(() => console.log('movies SEC service is listening')
  ) 
}
bootstrap();
