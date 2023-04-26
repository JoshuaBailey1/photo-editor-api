import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as imageToBase64 from 'image-to-base64';
import { Configuration, OpenAIApi } from 'openai';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ImportRepository {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async getImageFromPexel(imageType: string): Promise<string> {
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

  async getImageFromOpenAI(imageType: string): Promise<string> {
    const configuration = new Configuration({
      apiKey: `${this.configService.get<string>('OpenAIAuth')}`,
    });
    const openai = new OpenAIApi(configuration);
    const image = await openai.createImage({
      prompt: imageType,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });
    return `data:image/jpeg;base64, ${image.data.data[0].b64_json}`;
  }
}
