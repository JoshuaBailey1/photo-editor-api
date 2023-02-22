import { Injectable } from '@nestjs/common';
import * as Jimp from 'jimp';

@Injectable()
export class AdjustmentService {
  async adjustBrightness(
    filePath: string,
    imageName: string,
    intensity: number,
  ): Promise<any> {
    const image = await Jimp.read(`${filePath}/${imageName}`);

    image.brightness(intensity);

    const newImageName = 'test.' + image.getExtension();

    image.write(`${filePath}/${newImageName}`);

    return;
  }
}
