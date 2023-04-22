import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
@Injectable()
export class AdjustmentService {
  async adjustSharpness(image: string, intensity: number): Promise<string> {
    const [prefix, data] = image.split(',');
    const buffer = Buffer.from(data, 'base64');
    const sharpenedImage = await sharp(buffer)
      .sharpen({ sigma: intensity })
      .toBuffer();
    const base64 = `${prefix},${sharpenedImage.toString('base64')}`;

    return base64;
  }
}
