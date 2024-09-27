import { Injectable } from '@nestjs/common';
import { Song } from './song.enttity';
import { CreateSongDto } from './dto/create-song-dto';

@Injectable()
export class SongsService {
  // Local DB (array for noew)

  private songs: Array<Song> = [];

  create(songDto: CreateSongDto): Song[] {
    const newSong: Song = {
      id: Date.now(),
      ...songDto,
    };

    this.songs.push(newSong);
    return this.songs;
  }

  findOne(id: number): Promise<Song | undefined> {
    const result = this.songs.find((song) => song.id === id);
    return Promise.resolve(result);
  }

  findAll(): Promise<Array<Song>> {
    return Promise.resolve(this.songs);
  }

  update(id: number, newSong: Song): Promise<Song | undefined> {
    const index = this.songs.findIndex((song) => song.id === id);
    if (index === -1) return Promise.reject('Song not found');
    this.songs[index] = newSong;
    return Promise.resolve(newSong);
  }

  delete(id: number): Promise<Array<Song>> {
    this.songs = this.songs.filter((song) => song.id !== id);
    return Promise.resolve(this.songs);
  }
}
