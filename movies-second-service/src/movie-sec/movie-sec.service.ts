import { Injectable } from '@nestjs/common';

let moviesSec = [
    {
      "name": "Avatar",
      "director": "OB1",
      "style": "SIFI"
    },
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


    updateDirector(
      data
    ): void {
  
      
      let index = moviesSec.findIndex( (e) => {
        console.log('eee -->', e.name);
        
        return e.name == data.payload.movieName
      })
  
      moviesSec[index].director = data.payload.director
    }
}
