import { Inject, Injectable } from '@nestjs/common';
import * as imageToBase64 from 'image-to-base64';
import { ImportRepository } from './import.repository';

@Injectable()
export class ImportService {
  constructor(
    @Inject(ImportRepository)
    private readonly importRepository: ImportRepository,
  ) {}
  async getImageFromPexel(imageType: string): Promise<string> {
    const images = await this.importRepository.getImageFromPexel(imageType);
    const randomImage =
      images.data.photos[Math.floor(Math.random() * images.data.photos.length)]
        .src.original;
    const splitArray = randomImage.split('.');
    const extension = splitArray[splitArray.length - 1];
    const base64 = await imageToBase64(randomImage);

    const fullBase64 = `data:image/${extension};base64, ${base64}`;
    return fullBase64;
  }

  async getImageFromOpenAI(imageType: string): Promise<string> {
    const image = await this.importRepository.getImageFromOpenAI(imageType);

    const fullBase64 = `data:image/png;base64, ${image.data.data[0].b64_json}`;
    return fullBase64;
  }
}
