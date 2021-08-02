import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { MoviesModule } from './movies/movies.module';
import { MoviesecModule } from './moviesec/moviesec.module';

@Module({
  imports: [PostsModule, MoviesModule, MoviesecModule],
  controllers: [],
  providers: [], 
})
export class AppModule {}
