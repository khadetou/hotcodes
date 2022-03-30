import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
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
  appName: string;
  @Prop({ type: String })
  description: string;
  @Prop({ type: [String] })
  Goal: [string];
  @Prop({ type: String })
  design: string;
  @Prop({ type: [String] })
  functionnality: [string];
}

export const OrderWebSchema = SchemaFactory.createForClass(OrderWeb);
