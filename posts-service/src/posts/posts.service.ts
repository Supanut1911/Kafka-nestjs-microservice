import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
// import { Producer } from '@nestjs/microservices/external/kafka-options.interface';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { IPost, IUpdateDirector } from './interfaces/post.interface';
import * as moment from 'moment'


@Injectable()
export class PostsService implements OnModuleInit{

    posts: Array<IPost>
    private kafkaProducer: Producer
    constructor(
        @Inject('POST-SERVICE')
        private  postClientKafka: ClientKafka
    ) {
        this.posts = []
    }

    async onModuleInit() {
        this.kafkaProducer = await this.postClientKafka.connect()
    }

    addPost(
        post: IPost
    ): IPost {
        this.posts.push(post)
        console.log('current posts',this.posts);
        
        return this.posts[this.posts.length - 1]
    }

    async getList(
    ) {
        this.kafkaProducer.send({
            topic: 'postJa',
            messages: [
                {
                    key: Math.random() + "",
                    value: JSON.stringify({
                        posts: this.posts
                    })
                }
            ]
        })
        return this.posts
    }

    async updateMovieDirector(
        payload: IUpdateDirector,

    ) {

        let x = await this.kafkaProducer.send({
            topic: 'update.directorsX',
            messages: [
                {
                    key: 'UPD' + Math.random(),
                    'timestamp': `${Date.now()}`,
                    value: JSON.stringify({
                        payload: payload
                    }),
                },
            ]
        })

        console.log('xxxxxxxxx =>', x);
        
    }
}
