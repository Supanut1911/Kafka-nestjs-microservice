import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka, ClientProxy } from '@nestjs/microservices';
import * as moment from 'moment'
let movies = [
  {
    name: "Avatar",
    director: "Jason Nero",
    style: "SIFI",
    "createAt": moment('2021-08-01').format(),
    "updateAt": "" 
  },
  {
    name: "The thing",
    director: "Alice Boom",
    style: "Horror",
    "createAt": moment('2021-08-01').format(),
    "updateAt": "" 
  },
  {
    name: "MrBean",
    director: "Sabob Zero",
    style: "Commady",
    "createAt": moment('2021-08-01').format(),
    "updateAt": "" 
  },
]

let logMovies = []

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
      return e.name == data.payload.movieName
    })

    movies[index].director = data.payload.director
    movies[index].updateAt = moment().format()

    //only insert
    let newUpdateDirector = {
      data: data.payload,
      timeStamp: moment().format()
    }
    logMovies.push(newUpdateDirector)
  }

  getLogMoviesDirectorMessage() {
    return {
      moviesLog: logMovies
    }
  }
}

