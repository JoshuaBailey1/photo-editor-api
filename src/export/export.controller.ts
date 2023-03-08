import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ExportRequest } from './dto/requests/export.request';
import { ExportService } from './export.service';

@Controller('export')
export class ExportController {
  constructor(private readonly exportService: ExportService) {}

  @Post()
  async exportImage(@Body() request: ExportRequest): Promise<void> {
    try {
      return await this.exportService.exportImage(
        request.image,
        request.filePath,
        request.fileName,
      );
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
