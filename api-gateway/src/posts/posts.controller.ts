import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { Transport, Client, ClientKafka} from '@nestjs/microservices';
import { Kafka } from '@nestjs/microservices/external/kafka-options.interface';
import { IPost } from './interfaces/post.interface';
import {IUpdateDirector} from './interfaces/post.interface'

@Controller('posts')
export class PostsController {



   @Client({
       transport: Transport.KAFKA,
       options: {
           client: {
                clientId: 'posts',
                brokers: ['localhost:9092']
           },
           consumer: {
               groupId: 'posts-consumer'
           }
       }
   })
   client: ClientKafka
   async onModuleInit() {
       this.client.subscribeToResponseOf('add.new.post')
       this.client.subscribeToResponseOf('get.posts.list')
       this.client.subscribeToResponseOf('update.director.post')

   }

   @Post('/')
   addPost(
       @Body() post: IPost
   ) {
        console.log(post);
        return this.client.send('add.new.post', post)
   }

   @Get('/')
   getList() {
       return this.client.send('get.posts.list', '')
   }

   @Patch('/test')
   test() {
       return 'gogo'
   }

   @Post('/updateDirector')
   updateDirector(
    @Body() data: IUpdateDirector
   ) {
    return  this.client.send('update.director.post', data)
    // return 'hello'
   }
}
