import { LimitType } from '../enums/limit-type.enum';

export class BrokerLimit {
  targetPrice: number;
  humanId: string;
  quantity: number;
  type: LimitType;
}
