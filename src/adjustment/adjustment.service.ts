import { ColorActionName } from '@jimp/plugin-color';
import { Injectable } from '@nestjs/common';
import * as Jimp from 'jimp';
import * as sharp from 'sharp';
import { getBase64 } from '../helpers/image.conversion';
@Injectable()
export class AdjustmentService {
  async adjustBrightness(image: string, intensity: number): Promise<string> {
    const buffer = Buffer.from(image, 'base64');
    const imageForAdjustment = await Jimp.read(buffer);

    imageForAdjustment.brightness(intensity);

    return getBase64(imageForAdjustment);
  }

  async adjustContrast(image: string, intensity: number): Promise<string> {
    const buffer = Buffer.from(image, 'base64');
    const imageForAdjustment = await Jimp.read(buffer);

    imageForAdjustment.contrast(intensity);

    return getBase64(imageForAdjustment);
  }

  async adjustSaturation(image: string, intensity: number): Promise<string> {
    const buffer = Buffer.from(image, 'base64');
    const imageForAdjustment = await Jimp.read(buffer);

    imageForAdjustment.color([
      { apply: ColorActionName.SATURATE, params: [intensity] },
    ]);

    return getBase64(imageForAdjustment);
  }

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
