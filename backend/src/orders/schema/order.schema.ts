import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "src/auth/schema/user.schema";


export type OrderDocument = Order & Document;


@Schema()
export class Order{
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User;
    @Prop(raw({
        plateform: {type: String, required: true},
        type: {type: String, required: true},
        appName: {type: String, required: true},
        description: {type: String, required: true},    
        Goal: {type: String, required: true},
        target: {type: String, required: true},
        moodBoard: {type: String, required: true},
        wireframe: {type: String, required: true},
        design: {type: String, required: true},
        functionnality: {type: String, required: true},
    }))
    design: Record<string, any>;

    @Prop(raw({
        plateform: {type: String, required: true},
        type: {type: String, required: true},
        appName: {type: String, required: true},
        Goal: {type: String, required: true},
        design: {type: String, required: true},
        functionnality: {type: String, required: true},
    }))
    webDev: Record<string, any>;

    @Prop(raw({
        plateform: {type: String, required: true},
        type: {type: String, required: true},
        appName: {type: String, required: true},
        Goal: {type: String, required: true},
        design: {type: String, required: true},
        functionnality: {type: String, required: true},
    }))
    mobileDev: Record<string, any>;
}


export const OrderSchema = SchemaFactory.createForClass(Order);