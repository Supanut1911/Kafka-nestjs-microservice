import { Module } from '@nestjs/common';
import { MoviesecController } from './moviesec.controller';

@Module({
  controllers: [MoviesecController]
})
export class MoviesecModule {}
