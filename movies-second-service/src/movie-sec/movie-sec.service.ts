import { Injectable } from '@nestjs/common';

let moviesSec = [
    {
      name: "DOOM",
      director: "Jera nemo",
      style: "Action"
    },
    {
      name: "The1973",
      director: "Sam smith",
      style: "War"
    },
    {
      name: "LionKing",
      director: "Disney conner",
      style: "Animation"
    },
]

@Injectable()
export class MovieSecService {
    getMoviesList(){
        return moviesSec
    }

}
