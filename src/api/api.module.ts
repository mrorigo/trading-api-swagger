import { ChartingController } from './controllers/charting.controller';
import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/pending-orders.controller';
import { RestController } from './controllers/basic.controller';
import { UserReportsController } from './controllers/user-reports.controller';

@Module({
  controllers: [
    RestController,
    OrdersController,
    UserReportsController,
    ChartingController,
  ],
})
export class ApiModule {}
