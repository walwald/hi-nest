import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig = require('../ormconfig');

@Module({
  imports: [MoviesModule, TypeOrmModule.forRoot(ormconfig)],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
