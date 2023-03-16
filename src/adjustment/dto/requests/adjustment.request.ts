import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AdjustmentRequest {
  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsNumber()
  intensity: number;
}
