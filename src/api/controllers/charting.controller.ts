import { ApiTags } from '@nestjs/swagger';
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
import { SetIfThenOrder } from '../dtos/set-if-then-order.dto';
import { SetOrderRequest } from '../dtos/set-order-request.dto';
import { UpdateOrderDto } from '../dtos/update-order.request.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
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

  @Post('/charting/prices')
  public async getCurrentPrices(
    @Body() dto: InstrumentType[],
  ): Promise<PriceResponse[]> {
    return;
  }
}
