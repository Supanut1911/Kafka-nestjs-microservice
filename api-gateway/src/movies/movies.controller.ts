import { Body, Controller, Get, Post } from '@nestjs/common';
import { Transport, Client, ClientKafka} from '@nestjs/microservices';
import {IMovie} from '../posts/interfaces/post.interface'
import {timeout} from 'rxjs/operators'
@Controller('movies')
export class MoviesController {
    @Client({
        transport: Transport.KAFKA,
        options: {
            client: {
                clientId: 'movies',
                // brokers: ['localhost:9092', 'localhost:9095', 'localhost:9097'],
                brokers: ['localhost:9092'],

                // ssl: true,
                // sasl: {
                //     mechanism: 'plain', // scram-sha-256 or scram-sha-512
                //     username: 'test',
                //     password: '123456'
                //   },
            },
            consumer: {
                groupId: 'movies-consumer'
            },
        }
    })
    client: ClientKafka


    async onModuleInit() {
        this.client.subscribeToResponseOf('add.new.movie')
        this.client.subscribeToResponseOf('get.movies.list')
        this.client.subscribeToResponseOf('get.posts.list')
        this.client.subscribeToResponseOf('get.movies.log')
        
        await this.client.connect()
    }

    @Post('/')
    addPost(
        @Body() movie: IMovie 
    ) {
         return this.client.send('add.new.movie', movie)
    }
 
    @Get('/')
    async getList() {
        // let postsRes = await this.client.emit('get.posts.list', '').toPromise()
        // console.log('xxxxxxxxxxpostsRes', postsRes)
        return this.client.send('get.movies.list', '')
    }

    @Get('/movieWithPost')
    async movieWithPost() {
        return this.client.send('postJa', '')
    }

    @Get('movielog')
    async getMovieLog() {
        return this.client.send('get.movies.log', '')
    }
}
