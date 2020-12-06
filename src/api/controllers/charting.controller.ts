import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { BrokerBaseAccount } from '../dtos/broker-account-base-information.dto';
import { BrokerInstrumentBaseInfo } from '../dtos/broker-instrument-base-information.dto';
import { BrokerInstrumentLimitInfo } from '../dtos/broker-instrument-limit-info.dto';
import { BrokerOrderEvent } from '../dtos/broker-order-event.dto';
import { BrokerOrderResults } from '../dtos/broker-position-result.dto';
import { CandleDataRequest } from '../dtos/candle-data-request.dto';
import { CandleDataResponse } from '../dtos/candle-data.response.dto';
import { InstrumentType } from '../enums/instrument-type';
import { OrderResponse } from '../dtos/set-order-response.dto';
import { PriceResponse } from '../dtos/price-response.dto';
@ApiTags('charting')
@Controller('charting')
export class ChartingController {
  @Post('/rest/batch')
  public async getChartData(
    @Body()
    dto: CandleDataRequest,
  ): Promise<CandleDataResponse> {
    return;
  }
  @ApiBody({ enum: InstrumentType, isArray: true })
  @Post('/prices')
  public async getCurrentPrices(
    @Body() dto: InstrumentType[],
  ): Promise<PriceResponse[]> {
    return;
  }
}
