import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ImportRequest } from './dto/requests/import.request';
import { ImportService } from './import.service';

@Controller('import')
export class ImportController {
  constructor(private readonly importService: ImportService) {}

  @Post()
  async importImage(@Body() request: ImportRequest): Promise<string> {
    try {
      return await this.importService.importImage(
        request.filePath,
        request.fileName,
      );
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
