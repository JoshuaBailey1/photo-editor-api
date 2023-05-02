import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ImportRepository {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async getImageFromPexel(imageType: string): Promise<any> {
    const request = this.httpService.get(
      `https://api.pexels.com/v1/search?query=${imageType}`,
      {
        headers: {
          Authorization: `${this.configService.get<string>('PexelsApiAuth')}`,
        },
      },
    );
    const images = await lastValueFrom(request);
    return images;
  }

  async getImageFromOpenAI(imageType: string): Promise<any> {
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
    return image;
  }
}
