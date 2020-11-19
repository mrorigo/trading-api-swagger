import { ApiProperty } from '@nestjs/swagger';
import { InstrumentType } from '../enums/instrument-type';

export class BrokerPosition {
  positionId: string; //uuid string
  humanId: string;
  created: string;
  modified: any;
  averagePrice: number;
  averagePriceConverted: number;
  currentPrice: number;
  limitPrice?: any;
  stopPrice?: any;
  value: number;
  investment: number;
  limitStopNotify?: any;
  trailingStop?: any;
  trailingStopPrice?: any;
  trailingStopNotify?: any;
  @ApiProperty({
    type: 'enum',
    enum: InstrumentType,
    enumName: 'InstrumentType',
  })
  code: InstrumentType;
  margin: number;
  ppl: number;
  quantity: number;
  maxBuy: number;
  maxSell: number;
  maxOpenBuy: number;
  maxOpenSell: number;
  swap: number;
  frontend: string;
  pplAdjustment?: any;
  autoInvestQuantity?: any;
  fxPpl?: any;
}
