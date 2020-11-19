import { ApiBody, ApiProperty } from '@nestjs/swagger';

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
  @ApiProperty({ type: 'boolean', default: false, example: false })
  fake: boolean;
  derived: boolean;
}
