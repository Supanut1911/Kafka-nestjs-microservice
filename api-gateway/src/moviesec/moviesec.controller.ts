import { Controller, Get } from '@nestjs/common';
import { Transport, Client, ClientKafka} from '@nestjs/microservices';

@Controller('moviesec')
export class MoviesecController {
    @Client({
        transport: Transport.KAFKA,
        options: {
            client: {
                clientId: 'moviesSec',
                brokers: ['localhost:9092']
            },
            consumer: {
                groupId: 'movies-sec-consumer'
            }
        }
    })
    client: ClientKafka

    async onModuleInit() {
        this.client.subscribeToResponseOf('get.movies.sec.list')
        this.client.subscribeToResponseOf('get.movies.sec.log')

        await this.client.connect()
    }

    @Get('/')
    async getMoviesSecList() {
        console.log('here moviesec.controller');
        
        return this.client.send('get.movies.sec.list', '')
        // return 'movies sec'
    }

    @Get('/movieseclog')
    async getmovieseclog() {
        return this.client.send('get.movies.sec.log', '')
    }
}
