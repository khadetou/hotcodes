import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderWeb } from './schema/orderweb.schema';
import { Model } from 'mongoose';
import { CreateWebdevDto } from './dto/create-webdev.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class OrderwebService {
  constructor(
    @InjectModel(OrderWeb.name) private readonly orderwebModel: Model<OrderWeb>,
    private cloudinaryService: CloudinaryService,
  ) {}

  //CREATE ORDERWEB
  async create(createWebdevDto: CreateWebdevDto, user: any): Promise<OrderWeb> {
    const { Goal, description, design, functionnality, plateform, typeapp } =
      createWebdevDto;

    let goalSplits: string[];
    let funcSplits: string[];

    if (Goal) {
      goalSplits = Goal.split(',').map((s) => s.trim());
    }

    if (functionnality) {
      funcSplits = functionnality.split(',').map((s) => s.trim());
    }

    let orderwebFields = {
      plateform: plateform && plateform,
      typeapp: typeapp && typeapp,
      appName: description && description,
      description: description && description,
      Goal: Goal && goalSplits,
      design: design && design,
      functionnality: functionnality && funcSplits,
    };

    let orderweb = await this.orderwebModel.findOne({ user: user._id });
    if (orderweb) {
      orderweb = await this.orderwebModel.findOneAndUpdate(
        { user: user._id },
        { $set: orderwebFields },
        { new: true },
      );
    } else {
      orderweb = await this.orderwebModel.create(orderwebFields);
    }

    try {
      return await orderweb.save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  //Upload image to cloudinary
  async uploadImage(file: Express.Multer.File) {
    return await this.cloudinaryService.uploadImage(file).catch(() => {
      throw new BadRequestException('Invalid file type');
    });
  }
}
