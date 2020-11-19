import { ApiProperty } from '@nestjs/swagger';
import { InstrumentType } from '../enums/instrument-type';
import { PeriodType } from '../enums/period-type.enum';

export class CandleData {
  @ApiProperty({
    type: 'enum',
    enum: InstrumentType,
    enumName: 'InstrumentType',
  })
  instCode: InstrumentType;
  periodType: PeriodType;
  limit: number;
  withFakes: boolean;
}
