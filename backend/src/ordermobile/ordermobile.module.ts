import { Module } from '@nestjs/common';
import { OrdermobileController } from './ordermobile.controller';
import { OrdermobileService } from './ordermobile.service';

@Module({
  controllers: [OrdermobileController],
  providers: [OrdermobileService]
})
export class OrdermobileModule {}
