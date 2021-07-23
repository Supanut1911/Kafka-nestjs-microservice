import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [PostsModule, MoviesModule],
  controllers: [],
  providers: [], 
})
export class AppModule {}
