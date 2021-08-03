import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
    ClientsModule.register([
      {
        name: 'POST-SERVICE',
        transport: Transport.KAFKA,
        options: {
          client:{
            clientId: 'postsS',
            brokers: ['localhost:9092','localhost:9093']
          },
          consumer: {
            groupId: 'post-consumer'
          }
        }
      }
    ])
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
