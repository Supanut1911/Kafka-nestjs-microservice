import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { MovieSecService } from './movie-sec.service';

@Controller('movie-sec')
export class MovieSecController {
    constructor(
        private readonly movieSECService: MovieSecService,
    
      ) {}

    @MessagePattern('get.movies.sec.list')
    getMovies(
  
    ) {
      console.log('ka here');
      
      return this.movieSECService.getMoviesList()
    }

    @MessagePattern('update.directors')
    async updateDirector(
      @Payload() message
    ) {
      // let messageRes = message.value
      console.log('at movie update.director =>', message);
      try {
        return this.movieSECService.updateDirector(message.value)
      } catch (error) {
        return {
          status: '400',
          message: `error cant update director, error: ${error}`
        }
      }
    }

    @MessagePattern('get.movies.sec.log')
    getMoviesSecLog() {
      return this.movieSECService.getLogMovieSecDirectorMessage()
    }
}
