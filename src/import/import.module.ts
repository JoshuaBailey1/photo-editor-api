import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ImportController } from './import.controller';
import { ImportRepository } from './import.repository';
import { ImportService } from './import.service';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [ImportService, ImportRepository],
  controllers: [ImportController],
})
export class ImportModule {}
