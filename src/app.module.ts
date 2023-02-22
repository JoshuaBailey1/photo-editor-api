import { Module } from '@nestjs/common';
import { AdjustmentModule } from './adjustment/adjustment.module';

@Module({
  imports: [AdjustmentModule],
})
export class AppModule {}
