import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schema/user.schema';

export type OrderWebDocument = OrderWeb & Document;

@Schema()
export class OrderWeb {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user?: User;
  @Prop({ type: String })
  plateform: string;
  @Prop({ type: String })
  typeapp: string;
  @Prop({ type: String })
  appname: string;
  @Prop({ type: String })
  description: string;
  @Prop({ type: [String] })
  goal: [string];
  @Prop({
    type: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
        format: { type: String, required: true },
      },
    ],
  })
  design?: {
    public_id: string;
    url: string;
    format: string;
  }[];

  @Prop({ type: [String] })
  functionnality: [string];
}

export const OrderWebSchema = SchemaFactory.createForClass(OrderWeb);
