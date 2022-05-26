import { Module } from '@nestjs/common';
import { OrdermarketingService } from './ordermarketing.service';
import { OrdermarketingController } from './ordermarketing.controller';

@Module({
  providers: [OrdermarketingService],
  controllers: [OrdermarketingController]
})
export class OrdermarketingModule {}
