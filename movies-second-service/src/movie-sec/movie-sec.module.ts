import { Module } from '@nestjs/common';
import { MovieSecController } from './movie-sec.controller';
import { MovieSecService } from './movie-sec.service';

@Module({
  controllers: [MovieSecController],
  providers: [MovieSecService]
})
export class MovieSecModule {}
