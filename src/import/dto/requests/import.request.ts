import { IsNotEmpty, IsString } from 'class-validator';

export class ImportRequest {
  @IsNotEmpty()
  @IsString()
  filePath: string;

  @IsNotEmpty()
  @IsString()
  fileName: string;
}
