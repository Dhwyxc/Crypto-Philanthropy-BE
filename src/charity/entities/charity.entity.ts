// import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
// import { Event } from 'src/events/entities/event.entity';
export type CharityDocument = Charity & Document;
@Schema({ timestamps: true })
export class Charity extends Document {
  @Prop({ type: Types.ObjectId, ref: User.name })
  userId?: Types.ObjectId;
  @Prop()
  coin?: string;
  @Prop()
  address?: string;
  @Prop()
  transactionId?: string;
  @Prop()
  message?: string;
}

export const CharitySchema = SchemaFactory.createForClass(Charity);
