import { Module } from '@nestjs/common';
import { MovieSecModule } from './movie-sec/movie-sec.module';


@Module({
  imports: [MovieSecModule],
})
export class AppModule {}
