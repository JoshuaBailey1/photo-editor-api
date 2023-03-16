import { Injectable } from '@nestjs/common';
import * as Jimp from 'jimp';
import { getBase64 } from '../helpers/image.conversion';

@Injectable()
export class ImportService {
  async importImage(filePath: string, fileName: string): Promise<string> {
    const image = await Jimp.read(`${filePath}/${fileName}`);

    const base64 = getBase64(image);

    return base64;
  }
}
