import { Module } from '@nestjs/common';
import { AdjustmentModule } from './adjustment/adjustment.module';
import { ExportModule } from './export/export.module';

@Module({
  imports: [AdjustmentModule, ExportModule],
})
export class AppModule {}
