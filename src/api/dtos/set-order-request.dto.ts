import { ApiProperty } from '@nestjs/swagger';
import { InstrumentType } from '../enums/instrument-type';

export class SetOrderRequest {
  @ApiProperty({
    type: 'enum',
    enum: InstrumentType,
    enumName: 'InstrumentType',
  })
  instrumentCode: InstrumentType;
  limitDistance: number | null;
  notify: string;
  quantity: number; // sell < 0 >  buy
  stopDistance: number | null;
  targetPrice: number;
}
