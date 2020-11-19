import { BrokerBaseAccount } from '../dtos/broker-account-base-information.dto';
import { BrokerInstrument } from '../dtos/broker-instrument.dto';
import { BrokerInstrumentBaseInfo } from '../dtos/broker-instrument-base-information.dto';
import { BrokerInstrumentLimitInfo } from '../dtos/broker-instrument-limit-info.dto';
import { InstrumentType } from '../enums/instrument-type';

import {
  ApiBody,
  ApiParam,
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
@ApiTags('basic')
@Controller('rest')
export class RestController {
  @ApiParam({
    type: 'enum',
    name: 'instcode',
    enum: InstrumentType,
    description:
      'only a few instruments are listed here, use the other instruments endpoint to get all instruments',
  })
  @Get('/v1/instruments/:instcode')
  public async getInstrumentBaseInformation(
    @Param('instcode') instCode: InstrumentType,
  ): Promise<BrokerInstrumentBaseInfo> {
    return;
  }

  @Get('v1/instruments')
  public async getAllInstruments(): Promise<BrokerInstrument[]> {
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
}
