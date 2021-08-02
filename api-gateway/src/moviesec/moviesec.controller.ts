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
        await this.client.connect()
    }

    @Get('/')
    async getMoviesSecList() {
        return 'movies sec'
    }
}
