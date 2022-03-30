import { Module } from '@nestjs/common';
import { OrderdesignController } from './orderdesign.controller';
import { OrderdesignService } from './orderdesign.service';

@Module({
  controllers: [OrderdesignController],
  providers: [OrderdesignService]
})
export class OrderdesignModule {}
