import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AdjustmentService } from './adjustment.service';
import { AdjustmentRequest } from './dto/requests/adjustment.request';

@Controller('adjustment')
export class AdjustmentController {
  constructor(private readonly adjustmentService: AdjustmentService) {}

  @Post('brightness')
  async adjustBrightness(@Body() request: AdjustmentRequest): Promise<string> {
    try {
      return await this.adjustmentService.adjustBrightness(
        request.image,
        request.intensity,
      );
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('contrast')
  async adjustContrast(@Body() request: AdjustmentRequest): Promise<string> {
    try {
      return await this.adjustmentService.adjustContrast(
        request.image,
        request.intensity,
      );
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('saturation')
  async adjustSaturation(@Body() request: AdjustmentRequest): Promise<string> {
    try {
      return await this.adjustmentService.adjustSaturation(
        request.image,
        request.intensity,
      );
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('sharpness')
  async adjustSharpness(@Body() request: AdjustmentRequest): Promise<string> {
    return await this.adjustmentService.adjustSharpness(
      request.image,
      request.intensity,
    );
  }
}
