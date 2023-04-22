import { Body, Controller, Post } from '@nestjs/common';
import { AdjustmentService } from './adjustment.service';
import { AdjustmentRequest } from './dto/requests/adjustment.request';

@Controller('adjustment')
export class AdjustmentController {
  constructor(private readonly adjustmentService: AdjustmentService) {}

  @Post('sharpness')
  async adjustSharpness(@Body() request: AdjustmentRequest): Promise<string> {
    return await this.adjustmentService.adjustSharpness(
      request.image,
      request.intensity,
    );
  }
}
