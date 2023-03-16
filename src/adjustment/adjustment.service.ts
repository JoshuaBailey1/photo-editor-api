import { ColorActionName } from '@jimp/plugin-color';
import { Injectable } from '@nestjs/common';
import * as Jimp from 'jimp';
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
}
