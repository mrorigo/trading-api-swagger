import { CandleResponse } from '../dtos/candle-response.dto';

export class CandleDataResponse {
  candles: CandleResponse[];
  ticks: any[];
}
