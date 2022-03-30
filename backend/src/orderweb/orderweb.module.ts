import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { OrderwebController } from './orderweb.controller';
import { OrderwebService } from './orderweb.service';
import { OrderWeb, OrderWebSchema } from './schema/orderweb.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OrderWeb.name, schema: OrderWebSchema },
    ]),
    AuthModule,
  ],
  controllers: [OrderwebController],
  providers: [OrderwebService],
})
export class OrderwebModule {}
