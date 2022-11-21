import { Injectable } from '@nestjs/common';
import { CallForward } from './callforward.model';
import { v4 as uuid } from 'uuid';
import { CreateCallforwardDto } from './dto/create-callforward.dto';

@Injectable()
export class CallforwardService {
  callForward: CallForward[] = [];

  createCallForward(createCallforwardDto: CreateCallforwardDto): CallForward {
    const { toNumber, forwardedNumber, startTime, endTime } = createCallforwardDto
    const callForward: CallForward = {
      id: uuid(),
      toNumber,
      forwardedNumber,
      startTime,
      endTime,  
    }
    this.callForward.push(callForward);
    return callForward;
  }

  canceCallForward(id: number): void {
    console.log(id);
  }
}
