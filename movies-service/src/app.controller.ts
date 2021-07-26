import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientKafka, Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { Producer } from '@nestjs/microservices/external/kafka.interface';


@Controller()
export class AppController {
  constructor(
    private readonly movieService: AppService,

  ) {}

  @MessagePattern('get.movies.list')
  getMovies(

  ) {
    return this.movieService.getMoviesList()
  }

  // @MessagePattern('get.movies.with.post')
  @MessagePattern('postJa')
  async getMoviesWithPost(
    @Payload() message
  ) {
    // console.log('yyyyyyyyyyy=>message', message);
    let messageRes = message.value.posts
    return this.movieService.getMoviesWithPost(messageRes)
  }

  @MessagePattern('update.director')
  async updateDirector(
    @Payload() message
  ) {
    // let messageRes = message.value
    console.log('at movie update.director =>', message);
    
    return this.movieService.updateDirector(message.value)
  }

}
