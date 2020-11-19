import { AllInstruments } from '../dtos/all-instruments.dto';
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
import { Type } from 'class-transformer';
import { UpdateOrderDto } from '../dtos/update-order.request.dto';
import {
  ApiBody,
  ApiExtraModels,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
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
@ApiTags('rest')
@Controller('rest')
export class RestController {
  @ApiParam({ type: 'enum', name: 'instcode', enum: InstrumentType })
  @Get('/v1/instruments/:instcode')
  public async getInstrumentBaseInformation(
    @Param('instcode') instCode: InstrumentType,
  ): Promise<BrokerInstrumentBaseInfo> {
    return;
  }

  @ApiResponse({
    schema: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        $ref: getSchemaPath(BrokerBaseAccount),
      },
    },
  })
  @Get('/v1/customer/accounts/stats')
  public async getAccount(): Promise<{ [key: string]: BrokerBaseAccount }> {
    return;
  }
  @ApiBody({ enum: InstrumentType, isArray: true })
  @Post('/v2/account/instruments/settings')
  public async getInstrumentLimits(
    @Body() dto: InstrumentType[],
  ): Promise<BrokerInstrumentLimitInfo[]> {
    return;
  }
  @Get('v1/instruments/search')
  public async getAllInstruments(): Promise<AllInstruments> {
    return;
  }
}
