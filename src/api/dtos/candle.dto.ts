export class Candle {
  birthTime: number;
  bid: {
    open: number;
    high: number;
    low: number;
    close: number;
  };
  ask: {
    open: number;
    high: number;
    low: number;
    close: number;
  };
  volume: number;
  fake: boolean;
  derived: boolean;
}
