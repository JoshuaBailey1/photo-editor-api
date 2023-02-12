import { Module } from '@nestjs/common';
import { BrightnessController } from './brightness.controller';
import { BrightnessService } from './brightness.service';

@Module({
  controllers: [BrightnessController],
  providers: [BrightnessService]
})
export class BrightnessModule {}
