import { BrokerAccountCashInfo } from '../dtos/broker-account-cash-info.dto';

export class OrderResponse {
  account: BrokerAccountCashInfo;
  positionId: string | null;
  targetPrice: number | null;
  executedPrice: number | null;
  quantity: number | null;
  coeff: { profit: number; loss: number } | null;
}
