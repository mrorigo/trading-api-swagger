import {
  ApiBody,
  ApiParam,
  ApiTags,
  getSchemaPath
  } from '@nestjs/swagger';
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

  @ApiParam({
    name: 'positionid',
    example: '23c849ed-5a7c-4c15-ae5f-eff851af32b1',
    type: 'string',
  })
  @Put('/rest/v2/pending-orders/associated/:positionid')
  public async updateOrder(
    @Body() dto: UpdateOrderDto,
    @Param('positionid') positionid: string,
  ): Promise<OrderResponse> {
    return;
  }

  @ApiParam({
    name: 'ifthenorderid',
    example: '23c849ed-5a7c-4c15-ae5f-eff851af32b1',
    type: 'string',
  })
  @Put('/rest/v2/pending-orders/entry-dep-limit-stop/:ifthenorderid')
  public async updateIfThenOrder(
    @Param('ifthenorderid') ifthenorderid: string,
    @Body() dto: SetIfThenOrder,
  ): Promise<OrderResponse> {
    return;
  }

  @ApiParam({
    name: 'positionid',
    example: '23c849ed-5a7c-4c15-ae5f-eff851af32b1',
    type: 'string',
  })
  @Delete('/rest/v2/pending-orders/associated/:positionid')
  public async deletePendingOrder(
    @Param('positionid') positionid: string,
  ): Promise<OrderResponse> {
    return;
  }

  @ApiParam({
    name: 'positionid',
    example: '23c849ed-5a7c-4c15-ae5f-eff851af32b1',
    type: 'string',
  })
  @Delete('/rest/v2/trading/open-positions/close/:positionid')
  public async closeOrder(
    @Param('positionid') positionid: string,
  ): Promise<OrderResponse> {
    return;
  }

  @ApiParam({
    name: 'ifthenorderid',
    example: '23c849ed-5a7c-4c15-ae5f-eff851af32b1',
    type: 'string',
  })
  @Delete('/rest/v2/pending-orders/entry/:ifthenorderid')
  public async deleteIfThenOrder(
    @Param('ifthenorderid') ifthenorderid: string,
  ): Promise<OrderResponse> {
    return;
  }
}
