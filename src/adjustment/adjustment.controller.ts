import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AdjustmentService } from './adjustment.service';
import { AdjustmentRequest } from './dto/requests/brightness.request';

@Controller('adjustment')
export class AdjustmentController {
  constructor(private readonly adjustmentService: AdjustmentService) {}

  @Post('brightness')
  async adjustBrightness(@Body() request: AdjustmentRequest): Promise<any> {
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

  @Post('contrast')
  async adjustContrast(@Body() request: AdjustmentRequest): Promise<any> {
    try {
      return await this.adjustmentService.adjustContrast(
        request.filePath,
        request.fileName,
        request.intensity,
      );
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('saturation')
  async adjustSaturation(@Body() request: AdjustmentRequest): Promise<any> {
    try {
      return await this.adjustmentService.adjustSaturation(
        request.filePath,
        request.fileName,
        request.intensity,
      );
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
