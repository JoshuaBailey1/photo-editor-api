import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AdjustmentRequest {
  @IsNotEmpty()
  @IsString()
  filePath: string;

  @IsNotEmpty()
  @IsString()
  fileName: string;

  @IsNotEmpty()
  @IsNumber()
  intensity: number;
}
