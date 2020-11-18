import { InstrumentType } from '../enums/instrument-type';
import { OpenCloseHours } from './broker-open-close-hours.dto';

export class BrokerInstrumentBaseInfo {
  code: InstrumentType;
  type: string;
  margin: number;
  openCloseHours: string[];
  openCloseInfo: {
    alwaysopen: boolean;
    openCloseHours: OpenCloseHours[];
  };
  shortPositionSwap: number;
  longPositionSwap: number;
  tsSwapCharges: string;
  tsExpiryDate: any;
  marginPercent: string;
  leverage: string;
}
