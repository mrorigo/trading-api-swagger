import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { InstrumentType } from '../enums/instrument-type';

export class PriceResponse {
  @ApiProperty({
    type: 'enum',
    enum: InstrumentType,
    enumName: 'InstrumentType',
  })
  instrumentCode: InstrumentType;
  sell: number;
  buy: number;
  timestamp: string;
  lastDirection: number;
}
