import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IKafkaMessage } from 'src/interfaces/kafka-message.interface';
import { IPost } from './interfaces/post.interface';
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
        return this.postservice.addPost(message.value)
    }
}
