import { ApiBody, ApiTags, getSchemaPath } from '@nestjs/swagger';
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
@ApiTags('orders')
@Controller('')
export class OrdersController {
  @Post('/rest/v2/trading/open-positions')
  public async setOrder(@Body() dto: SetOrderRequest): Promise<OrderResponse> {
    return;
  }

  @Post('/rest/v2/pending-orders/entry-dep-limit-stop')
  public async setPendingOrder(
    @Body() dto: SetIfThenOrder,
  ): Promise<OrderResponse> {
    return;
  }

  @Put('/pending-orders/associated/:brokerid')
  public async updateOrder(
    @Body() dto: UpdateOrderDto,
    @Param('brokerid') brokerId: string,
  ): Promise<OrderResponse> {
    return;
  }

  @Put('/rest/v2/pending-orders/entry-dep-limit-stop/:brokerId')
  public async updateIfThenOrder(
    @Body() dto: SetIfThenOrder,
  ): Promise<OrderResponse> {
    return;
  }

  @Delete('/rest/v2/trading/open-positions/close/:brokerId')
  public async closeOrder(
    @Param('brokerId') brokerId: string,
  ): Promise<OrderResponse> {
    return;
  }
}
