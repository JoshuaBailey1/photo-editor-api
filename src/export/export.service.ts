import { Injectable } from '@nestjs/common';
import * as Jimp from 'jimp';

@Injectable()
export class ExportService {
  async exportImage(
    image: string,
    filePath: string,
    fileName: string,
  ): Promise<void> {
    const toBuffer = Buffer.from(image, 'base64');
    const exportedImage = await Jimp.read(toBuffer);
    exportedImage.write(
      `${filePath}/${fileName}.${exportedImage.getExtension()}`,
    );
    return;
  }
}
