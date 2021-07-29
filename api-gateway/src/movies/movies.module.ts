import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { ClientsModule, Transport, Client, ClientKafka} from '@nestjs/microservices';

@Module({
  imports:[],
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule {}
