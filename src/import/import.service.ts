import { Inject, Injectable } from '@nestjs/common';
import * as Jimp from 'jimp';
import { getBase64 } from '../helpers/image.conversion';
import { ImportRepository } from './import.repository';

@Injectable()
export class ImportService {
  constructor(
    @Inject(ImportRepository)
    private readonly importRepository: ImportRepository,
  ) {}
  async importImage(filePath: string, fileName: string): Promise<string> {
    const image = await Jimp.read(`${filePath}/${fileName}`);

    const base64 = getBase64(image);

    return base64;
  }

  async getImageFromPexel(imageType: string) {
    return this.importRepository.getImageFromPexel(imageType);
  }
}
