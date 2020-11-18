import { BrokerLimit } from './broker-limit.dto';
import { InstrumentType } from '../enums/instrument-type';

export class IfThenOrder {
  code: InstrumentType;
  created: string;
  humanId: string;
  orderId: string;
  notify: string;
  quantity: number;
  targetPrice: number;
  type: string;
  limit: BrokerLimit | null;
  stop: BrokerLimit | null;
}
