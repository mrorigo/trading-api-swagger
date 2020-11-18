import { InstrumentType } from '../enums/instrument-type';

export class BrokerInstrumentLimitInfo {
  code: InstrumentType;
  maxBuy: number;
  maxOpenBuy: number;
  maxOpenSell: number;
  maxSell: number;
  minTrade: number;
  suspended: boolean;
}
