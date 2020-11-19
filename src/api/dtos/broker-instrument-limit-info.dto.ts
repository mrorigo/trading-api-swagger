import { ApiProperty } from '@nestjs/swagger';
import { InstrumentType } from '../enums/instrument-type';

export class BrokerInstrumentLimitInfo {
  @ApiProperty({
    type: 'enum',
    enum: InstrumentType,
    enumName: 'InstrumentType',
  })
  code: InstrumentType;
  maxBuy: number;
  maxOpenBuy: number;
  maxOpenSell: number;
  maxSell: number;
  minTrade: number;
  suspended: boolean;
}
