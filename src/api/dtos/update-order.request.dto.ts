import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  tp_sl: {
    takeProfit?: number;
    stopLoss?: number;
  };
  @ApiProperty({ default: 'NONE', example: 'NONE' })
  notify: string;
}
