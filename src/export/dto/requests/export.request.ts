import { IsNotEmpty, IsString } from 'class-validator';

export class ExportRequest {
  @IsNotEmpty()
  @IsString()
  filePath: string;

  @IsNotEmpty()
  @IsString()
  fileName: string;

  @IsNotEmpty()
  image: string;
}
