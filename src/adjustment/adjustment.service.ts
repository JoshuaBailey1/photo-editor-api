import { Injectable } from '@nestjs/common';
import { getBase64 } from '../helpers/image.conversion';
const Jimp = require('jimp');

@Injectable()
export class AdjustmentService {
  async adjustBrightness(
    filePath: string,
    imageName: string,
    intensity: number,
  ): Promise<any> {
    const image = await Jimp.read(`${filePath}/${imageName}`);

    image.brightness(intensity);

    const base64 = getBase64(image);

    return base64;
  }

  async adjustContrast(
    filePath: string,
    imageName: string,
    intensity: number,
  ): Promise<any> {
    const image = await Jimp.read(`${filePath}/${imageName}`);

    image.contrast(intensity);

    const base64 = getBase64(image);

    return base64;
  }

  async adjustSaturation(
    filePath: string,
    imageName: string,
    intensity: number,
  ): Promise<any> {
    const image = await Jimp.read(`${filePath}/${imageName}`);

    image.color([{ apply: 'saturate', params: [intensity] }]);

    const base64 = getBase64(image);

    return base64;
  }
}
