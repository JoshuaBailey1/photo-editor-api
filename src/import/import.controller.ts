import { Controller, Get, Param } from '@nestjs/common';
import { ImportService } from './import.service';

@Controller('import')
export class ImportController {
  constructor(private readonly importService: ImportService) {}

  @Get('image/:imageType')
  async getImages(@Param('imageType') imageType: string): Promise<string> {
    return this.importService.getImageFromPexel(imageType);
  }

  @Get('image/ai/:imageType')
  async getImagesFromAi(
    @Param('imageType') imageType: string,
  ): Promise<string> {
    return this.importService.getImageFromOpenAI(imageType);
  }
}
