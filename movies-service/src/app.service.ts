import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka, ClientProxy } from '@nestjs/microservices';

let movies = [
  {
    name: "Avatar",
    director: "Jason Nero",
    style: "SIFI"
  },
  {
    name: "The thing",
    director: "Alice Boom",
    style: "Horror"
  },
  {
    name: "MrBean",
    director: "Sabob Zero",
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

  updateDirector(
    data
  ): void {

    
    let index = movies.findIndex( (e) => {
      console.log('eee -->', e.name);
      
      return e.name == data.payload.movieName
    })

    movies[index].director = data.payload.director
  }
}
