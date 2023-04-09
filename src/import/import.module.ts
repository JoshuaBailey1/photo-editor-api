import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ImportController } from './import.controller';
import { ImportRepository } from './import.repository';
import { ImportService } from './import.service';

@Module({
  imports: [HttpModule],
  providers: [ImportService, ImportRepository],
  controllers: [ImportController],
})
export class ImportModule {}
