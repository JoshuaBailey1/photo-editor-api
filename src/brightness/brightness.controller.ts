import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { BrightnessService } from './brightness.service';
import { BrightnessRequest } from './dto/requests/brightness.request';

@Controller('brightness')
export class BrightnessController {
  constructor(private readonly brightnessService: BrightnessService) {}

  @Post()
  async adjustBrightness(@Body() request: BrightnessRequest): Promise<any> {
    try {
      return await this.brightnessService.adjustBrightness(
        request.filePath,
        request.fileName,
        request.intensity,
      );
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
