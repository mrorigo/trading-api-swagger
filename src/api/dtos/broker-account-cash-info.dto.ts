import { BrokerPosition } from './broker-position.dto';
import { IfThenOrder } from './if-then-order.dto';

export class BrokerAccountCashInfo {
  dealer: string;
  positions: BrokerPosition[];
  cash: {
    free: number;
    total: number;
    interest: number;
    indicator: number;
    commission: number;
    cash: number;
    ppl: number;
    result: number;
    margin: number;
    spreadBack: number;
    nonRefundable: number;
    dividend: number;
    stockInvestment: number;
    freeForStocks: number;
    totalCashForWithdraw: number;
    usedFinancing: any;
    blockedForStocks: any;
    pieCash: any;
  };
  limitStop: any[];
  oco: any[];
  ifThen: IfThenOrder[];
  equityOrders: any[];
  equityValueOrders: any[];
  id: number;
  timestamp: number;
}
