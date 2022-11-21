import { Module } from '@nestjs/common';
import { CallforwardController } from './callforward.controller';
import { CallforwardService } from './callforward.service';

@Module({
  controllers: [CallforwardController],
  providers: [CallforwardService]
})
export class CallforwardModule {}
