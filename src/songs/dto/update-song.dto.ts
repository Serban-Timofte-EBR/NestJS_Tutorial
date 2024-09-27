import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateSongDto {
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsArray()
  @IsOptional()
  artists?: string[];

  @IsDateString()
  @IsOptional()
  releaseDate: string;

  @IsNumber()
  @IsOptional()
  duration: string;
}
