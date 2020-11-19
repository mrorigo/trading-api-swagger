import { ApiProperty } from '@nestjs/swagger';
import { InstrumentType } from '../enums/instrument-type';
import { PeriodType } from '../enums/period-type.enum';

export class CandleData {
  @ApiProperty({
    type: 'enum',
    enum: InstrumentType,
    enumName: 'InstrumentType',
  })
  @ApiProperty({ enum: InstrumentType, type: 'enum' })
  instCode: InstrumentType;
  periodType: PeriodType;
  @ApiProperty({
    maximum: 500,
    description: 'how many candles you get in the response',
    example: 250,
  })
  limit: number;
  @ApiProperty({
    default: false,
    example: false,
    description:
      'SET THIS NOT TO TRUE IF YOU TRADE WITH REAL MONEY. if true, you get simulated data for instruments with closed-hours',
  })
  withFakes: boolean;
}
