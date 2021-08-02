import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
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
}
