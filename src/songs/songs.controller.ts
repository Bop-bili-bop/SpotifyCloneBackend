import { CreateSongDTO } from './dto/create-song-dto';
import { SongsService } from './songs.service';
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) { }
  @Post()
  createSong(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
  }
  @Get(':id')
  findById() {
    return 'fetch based on ID';
  }
  @Put(':id')
  update() {
    return 'fetch based on ID';
  }
  @Delete(':id')
  delete() {
    return 'fetch based on ID';
  }
}
