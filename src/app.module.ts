import { ApiModule } from './api/api.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
