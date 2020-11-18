import { InstrumentType } from '../enums/instrument-type';
import { PeriodType } from '../enums/period-type.enum';

export class CandleData {
  instCode: InstrumentType;
  periodType: PeriodType;
  limit: number;
  withFakes: boolean;
}
