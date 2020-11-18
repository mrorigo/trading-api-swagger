import { ApiProperty } from '@nestjs/swagger';
import { BrokerAccountCashInfo } from './broker-account-cash-info.dto';

export class BrokerBaseAccount {
  account: BrokerAccountCashInfo;
  accountInfo: {
    type: string;
    tradingType: string;
    currency: {
      id: number;
      code: string;
      symbol: string;
      minDemoResetSum: number;
      maxDemoResetSum: number;
    };
    username: any;
    fullName: any;
    email: any;
    lang: any;
    dateRegistered: string;
    accountId: number;
    additionalInfo: {
      automaticFuturesRollover: string;
      weekendTrader: string;
      sendIndicatorSms: string;
      tradingMode: string;
      dealer: string;
      showPrettyNames: string;
      promotionStatus: string;
      proquantCommissionPercent: string;
    };
    initialFund: number;
    equityAgreementAccepted: boolean;
    margin: number;
    showPredefinedQuantities: boolean;
    tradingPermissions: any;
    closePositionThreshold: number;
    marginCallThreshold: number;
    equityCloseOnly: boolean;
  };
  lockedCash: {
    totalLockedCash: number;
    lockedCash: any[];
  };
}
