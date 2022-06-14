import { Module } from '@nestjs/common';
import { CharityService } from './charity.service';
import { CharityController } from './charity.controller';
import { Charity, CharitySchema } from './entities/charity.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Charity.name, schema: CharitySchema }]),
  ],
  controllers: [CharityController],
  providers: [CharityService],
})
export class CharityModule {}
