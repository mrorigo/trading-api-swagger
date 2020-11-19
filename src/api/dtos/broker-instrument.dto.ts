import { InstrumentType } from '../enums/instrument-type';

export class BrokerInstrument {
  id: number;
  name: string;
  prettyName: string;
  code: InstrumentType;
  type: string;
  currency: string;
  group: string;
  isin: string;
  price: {
    buy: number;
    sell: number;
  };
  realPrice: {
    buy: number;
    sell: number;
  };
  minTrade: number;
  precision: number;
  minTradeSizeCoefficient: number;
  insignificantDigits: number;
  description: string;
  enabled: boolean;
  suspended: boolean;
  marketId: number;
  shortPercent: number;
  baseCode: string;
  maxPendingDist: number;
  priorityIndex: number;
  margin: number;
  quantity: number;
  quantityPrecision: number;
  countryOfOrigin: string;
}
