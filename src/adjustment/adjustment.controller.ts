import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AdjustmentService } from './adjustment.service';
import { BrightnessRequest } from './dto/requests/brightness.request';

@Controller('adjustment')
export class AdjustmentController {
  constructor(private readonly adjustmentService: AdjustmentService) {}

  @Post('brightness')
  async adjustBrightness(@Body() request: BrightnessRequest): Promise<any> {
    try {
      return await this.adjustmentService.adjustBrightness(
        request.filePath,
        request.fileName,
        request.intensity,
      );
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
