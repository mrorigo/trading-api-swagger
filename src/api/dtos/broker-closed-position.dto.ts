import { ApiProperty } from '@nestjs/swagger';
import { InstrumentType } from '../enums/instrument-type';

export class BrokerClosedPosition {
  direction: 'buy' | 'sell';
  @ApiProperty({
    type: 'enum',
    enum: InstrumentType,
    enumName: 'InstrumentType',
  })
  code: InstrumentType;
  quantity: number;
  orderNumber: {
    name: string;
    link: string;
    id: string;
    frontend: string;
  };
  price: string;
  closePrice: string;
  result: string;
  eventNumber: {
    name: string;
    id: string;
  };
  eventType: string;
  time: string;
  openingTime: string;
}
