import { Candle } from './candle.dto';
import { CandleData } from './candle-data.dto';

export class CandleResponse {
  request: CandleData;
  candles: Candle[];
}
