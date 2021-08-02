import { HttpException, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import * as moment from 'moment'

let moviesSec = [
    {
      "name": "Avatar",
      "director": "OB1",
      "style": "SIFI",
      "createAt": moment('2021-08-01').format(),
      "updateAt": "" 
    },
    {
      name: "DOOM",
      director: "Jera nemo",
      style: "Action",
      "createAt": moment('2021-08-01').format(),
      "updateAt": "" 
    },
    {
      name: "The1973",
      director: "Sam smith",
      style: "War",
      "createAt": moment('2021-08-01').format(),
      "updateAt": "" 
    },
    {
      name: "LionKing",
      director: "Disney conner",
      style: "Animation",
      "createAt": moment('2021-08-01').format(),
      "updateAt": "" 
    },
]

let logMovies = []

@Injectable()
export class MovieSecService {
    getMoviesList(){
        return moviesSec
    }


    updateDirector(
      data
    ): void {
  
      let index = moviesSec.findIndex( (e) => { 
        return e.name == data.payload.movieName
      })

      moviesSec[index].director = data.payload.director
      moviesSec[index].updateAt = moment().format()

    //only insert
      let newUpdateDirector = {
        data: data.payload,
        timeStamp: moment().format()
      }
      logMovies.push(newUpdateDirector)
    }

    getLogMovieSecDirectorMessage(

    ) {
      return {
        movieSECLog: logMovies
      }
    }
}
