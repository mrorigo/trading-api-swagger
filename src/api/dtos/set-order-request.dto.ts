import { InstrumentType } from '../enums/instrument-type';

export class SetOrderRequest {
  instrumentCode: InstrumentType;
  limitDistance: number | null;
  notify: string;
  quantity: number; // sell < 0 >  buy
  stopDistance: number | null;
  targetPrice: number;
}
