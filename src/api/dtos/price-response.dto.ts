import { InstrumentType } from '../enums/instrument-type';

export class PriceResponse {
  instrumentCode: InstrumentType;
  sell: number;
  buy: number;
  timestamp: string;
  lastDirection: number;
}
