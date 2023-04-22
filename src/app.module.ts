import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdjustmentModule } from './adjustment/adjustment.module';
import { ImportModule } from './import/import.module';

@Module({
  imports: [AdjustmentModule, ImportModule, ConfigModule.forRoot()],
})
export class AppModule {}
