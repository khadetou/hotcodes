import { IsString, IsNotEmpty } from 'class-validator';

export class CreateWebdevDto {
  @IsString()
  @IsNotEmpty()
  plateform: string;

  @IsString()
  @IsNotEmpty()
  typeapp: string;

  @IsString()
  @IsNotEmpty()
  appName: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  Goal: string;

  @IsString()
  @IsNotEmpty()
  functionnality: string;
}
