import { BrokerClosedPosition } from '../dtos/broker-closed-position.dto';
import { IsArray } from 'class-validator';

export class BrokerOrderResults {
  @IsArray()
  data: BrokerClosedPosition[];
  nextPage: string;
  currentPage: string;
  totalSize: number;
}
