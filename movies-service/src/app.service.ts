import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka, ClientProxy } from '@nestjs/microservices';

let movies = [
  {
    name: "Avatar",
    director: "Jason N",
    style: "SIFI"
  },
  {
    name: "The thing",
    director: "Alice boom",
    style: "Horror"
  },
  {
    name: "MrBean",
    director: "Sabob",
    style: "Commady"
  },
]



@Injectable()
export class AppService {
  // movieClient: ClientKafka
  
  // async onModuleInit() {
  //   this.movieClient.subscribeToResponseOf('get.posts.list')
  //   await this.movieClient.connect()
  // }


  constructor(
  ) {}

  async getMoviesList() {

    return {
      movies
      // post: postRes
    }
    // return movies
  }

  getMoviesWithPost(
    message
  ) {
    let x = {
      movies,
      post: message
    }
    console.log('getMoviesWithPost=>', x);
    
    return x
  }
}
