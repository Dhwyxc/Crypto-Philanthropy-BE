import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mixed, Types, Schema as MongooseSchema } from 'mongoose';
import { DonateProjectDto } from '../dto/donate-project.dto';
export type ProjectDocument = Project & Document;
@Schema({ timestamps: true })
export class Project extends Document {
  @Prop()
  name: string;

  @Prop()
  desc: string;

  @Prop()
  ownerAddress: string;

  @Prop()
  logo?: string;
   
  @Prop()
  target: number;

  @Prop({ type: MongooseSchema.Types.Mixed })
  // eslint-disable-next-line @typescript-eslint/ban-types
  donor?: Mixed;

  createdAt: Date;
  updatedAt: Date;
}
export const ProjectSchema = SchemaFactory.createForClass(Project);
