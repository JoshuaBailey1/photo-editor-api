import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as imageToBase64 from 'image-to-base64';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ImportRepository {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async getImageFromPexel(imageType: string) {
    const request = this.httpService.get(
      `https://api.pexels.com/v1/search?query=${imageType}`,
      {
        headers: {
          Authorization: `${this.configService.get<string>('PexelsApiAuth')}`,
        },
      },
    );

    const image = await lastValueFrom(request);

    const randomImage =
      image.data.photos[Math.floor(Math.random() * image.data.photos.length)]
        .src.original;

    const splitArray = randomImage.split('.');

    const extension = splitArray[splitArray.length - 1];

    const base64 = await imageToBase64(randomImage);

    const fullBase64 = `data:image/${extension};base64, ${base64}`;

    return fullBase64;
  }
}
