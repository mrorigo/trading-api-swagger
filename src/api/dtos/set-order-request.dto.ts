import { ApiProperty } from '@nestjs/swagger';
import { InstrumentType } from '../enums/instrument-type';

export class SetOrderRequest {
  @ApiProperty({
    type: 'enum',
    enum: InstrumentType,
    enumName: 'InstrumentType',
  })
  instrumentCode: InstrumentType;
  @ApiProperty({ nullable: true, type: 'number', example: null })
  limitDistance: number | null;
  @ApiProperty({ default: 'NONE', example: 'NONE' })
  notify: string;
  @ApiProperty({
    description: ' SELL < 0 > BUY',
    examples: [1.3, -1.2, 5, 0.1],
    example: 200,
  })
  quantity: number; // sell < 0 >  buy
  @ApiProperty({ nullable: true, type: 'number', example: null })
  stopDistance: number | null;
  @ApiProperty({ example: 22.55 })
  targetPrice: number;
}
