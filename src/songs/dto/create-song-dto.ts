import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsString({
    each: true,
  })
  @IsArray()
  readonly artists: string[];
  @IsNotEmpty()
  @IsDateString()
  readonly releaseDate: Date;
  @IsNotEmpty()
  @IsMilitaryTime()
  readonly duration: Date;
}
