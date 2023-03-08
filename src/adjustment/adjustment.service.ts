import { Injectable } from '@nestjs/common';
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

    const newImageName = 'test.' + image.getExtension();

    image.write(`${filePath}/${newImageName}`);

    return;
  }

  async adjustContrast(
    filePath: string,
    imageName: string,
    intensity: number,
  ): Promise<any> {
    const image = await Jimp.read(`${filePath}/${imageName}`);

    image.contrast(intensity);

    const newImageName = 'test.' + image.getExtension();

    image.write(`${filePath}/${newImageName}`);

    return;
  }

  async adjustSaturation(
    filePath: string,
    imageName: string,
    intensity: number,
  ): Promise<any> {
    const image = await Jimp.read(`${filePath}/${imageName}`);

    image.color([{ apply: 'saturate', params: [intensity] }]);

    const newImageName = 'test.' + image.getExtension();

    image.write(`${filePath}/${newImageName}`);

    return;
  }
}
