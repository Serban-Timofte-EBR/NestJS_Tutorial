import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { retry } from 'rxjs';

@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}

  // GET /songs: Get all songs
  @Get()
  findAll() {
    return this.songService.findAll();
  }

  // GET /songs/:id: Get a specific song by ID
  @Get(':id')
  findOne(id: number) {
    return this.songService.findOne(id);
  }

  // POST /songs: Create a new song       !!! Here we need a DTO
  // @Post()
  // create(song: Song) {
  //   return this.songService.create(song);
  // }
}
