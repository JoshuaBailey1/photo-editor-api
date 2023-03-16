import { Injectable } from '@nestjs/common';
import * as Jimp from 'jimp';

@Injectable()
export class ExportService {
  async exportImage(
    image: string,
    filePath: string,
    fileName: string,
  ): Promise<void> {
    const buffer = Buffer.from(image, 'base64');
    const imageForExport = await Jimp.read(buffer);
    imageForExport.write(
      `${filePath}/${fileName}.${imageForExport.getExtension()}`,
    );
    return;
  }
}
