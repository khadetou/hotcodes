import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schema/user.schema';

export type OrderMobileDocument = OrderMobile & Document;

@Schema()
export class OrderMobile {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user?: User;
  @Prop({ type: String })
  plateform: string;
  @Prop({ type: String })
  typeapp: string;
  @Prop({ type: String })
  appName: string;
  @Prop({ type: String })
  description: string;
  @Prop({ type: [String] })
  Goal: [string];
  @Prop({
    type: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
  })
  design: {
    public_id: string;
    url: string;
  }[];
  @Prop({ type: [String] })
  functionnality: [string];
}

export const OrderMobileSchema = SchemaFactory.createForClass(OrderMobile);
