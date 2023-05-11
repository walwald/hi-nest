import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private moviesRepository: Repository<Movie>,
  ) {}

  getAll(): Promise<Movie[]> {
    return this.moviesRepository.find();
  }

  async getOne(id: number): Promise<Movie | null> {
    const movie = await this.moviesRepository.findOneBy({ id });
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }
    return movie;
  }

  async deleteOne(id: number): Promise<void> {
    await this.getOne(id);
    this.moviesRepository.delete(id);
  }

  async create(movieData: CreateMovieDto): Promise<void> {
    await this.moviesRepository.save(movieData);
  }

  async update(id: number, updateData: UpdateMovieDto): Promise<void> {
    await this.getOne(id);
    this.moviesRepository.update(id, updateData);
  }
}
