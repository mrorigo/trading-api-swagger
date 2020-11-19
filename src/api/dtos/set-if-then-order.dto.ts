import { ApiProperty } from '@nestjs/swagger';

export class SetIfThenOrder {
  @ApiProperty({ default: 'NONE', example: 'NONE' })
  notify: string;
  targetPrice: number;
  takeProfit: number | null;
  stopLoss: number | null;
  quantity: number;
}
