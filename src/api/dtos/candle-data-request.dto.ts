import { CandleData } from '../dtos/candle-data.dto';

export class CandleDataRequest {
  candles: CandleData[];
  ticks: any[];
}
