import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CallForward } from './callforward.model';
import { CallforwardService } from './callforward.service';
import { CreateCallforwardDto } from './dto/create-callforward.dto';

@Controller('callforward')
export class CallforwardController {
  constructor(private callForwardService: CallforwardService) {}

  @Post()
  createCallForward(@Body() createCallforwardDto: CreateCallforwardDto): CallForward {
    return this.callForwardService.createCallForward(createCallforwardDto);
  }

  @Post('/:id')
  cancelCallForward(@Param('id') id: number): void {
    return this.callForwardService.canceCallForward(id);
  }
}
