import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig = require('../ormconfig');
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MoviesModule, TypeOrmModule.forRoot(ormconfig), UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private datasource: DataSource) {}
}
