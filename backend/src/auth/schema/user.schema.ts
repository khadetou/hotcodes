import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String })
  googleId?: string;
  @Prop({ required: true, type: String })
  firstName: string;
  @Prop({ required: true, type: String })
  lastName: string;
  @Prop({ required: true, type: String })
  email: string;
  @Prop({ type: Number, default: 0 })
  phone: number;
  @Prop({ required: true, type: String })
  password?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
