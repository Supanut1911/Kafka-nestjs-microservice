import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Kafka } from '@nestjs/microservices/external/kafka-options.interface';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client:{
        brokers: ['localhost:9092', 'localhost:9095', 'localhost:9097'],
      },
      consumer: {
        groupId: 'movies-consumer'
      }
    }
  })

  app.listen(() => console.log('movies service is listening')
  ) 
}
bootstrap();
