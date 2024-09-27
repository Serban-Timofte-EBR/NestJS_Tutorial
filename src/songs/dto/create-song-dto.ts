import { IsString, IsArray, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @IsNotEmpty()
  artists: string[];

  @IsDateString()
  releaseDate: string;

  @IsString()
  @IsNotEmpty()
  duration: string;
}
