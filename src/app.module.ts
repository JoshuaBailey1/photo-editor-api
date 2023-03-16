import { Module } from '@nestjs/common';
import { AdjustmentModule } from './adjustment/adjustment.module';
import { ExportModule } from './export/export.module';
import { ImportModule } from './import/import.module';

@Module({
  imports: [AdjustmentModule, ExportModule, ImportModule],
})
export class AppModule {}
