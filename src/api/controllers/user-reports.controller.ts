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
@ApiTags('user-reports')
@Controller('user-reports')
export class UserReportsController {
  @Get('/rest/positionHistory/:brokerid')
  public async getOrderEvents(
    @Param('brokerId') brokerId: string,
  ): Promise<BrokerOrderEvent[]> {
    return;
  }
  @Get('/rest/result')
  public async getOrderResults(
    @Query('page') page: number,
    @Query('perPage') perPage: number,
    @Query('sort') sort: string,
  ): Promise<BrokerOrderResults> {
    return;
  }
}
