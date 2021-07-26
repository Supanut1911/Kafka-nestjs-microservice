import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { IKafkaMessage } from 'src/interfaces/kafka-message.interface';
import { IPost, IUpdateDirector } from './interfaces/post.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postservice: PostsService
    ) {}

    @MessagePattern('get.posts.list')
    getPosts() {
        return this.postservice.getList()
    }

    @MessagePattern('add.new.post')
    addPost(
        @Payload() message: IKafkaMessage<IPost>
    ) {
        console.log(message);
        
        return this.postservice.addPost(message.value)
    }
    
    @MessagePattern('update.director.post')
    updateDirector(
        @Payload() message: IKafkaMessage<IUpdateDirector>
    ) {
        console.log('======>',message);
        
        return this.postservice.updateMovieDirector(message.value)

    }
}
