import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { OrderMobile } from './schema/ordermobile.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMobiledevDto } from './dto/create-mobiledev.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class OrdermobileService {
  constructor(
    @InjectModel(OrderMobile.name)
    private readonly ordermobileModel: Model<OrderMobile>,
    private cloudinaryService: CloudinaryService,
  ) {}

  //GET ALL ORDERMOBILE
  async findAll(): Promise<OrderMobile[]> {
    return await this.ordermobileModel.find().exec();
  }

  //GET ORDERMOBILE BY ID
  async findOne(id: string): Promise<OrderMobile> {
    return await this.ordermobileModel.findById(id).exec();
  }

  //DELETE ORDERMOBILE
  async delete(id: string): Promise<OrderMobile> {
    return await this.ordermobileModel.findByIdAndRemove(id).exec();
  }

  //GET ORDERMOBILE BY USER
  async findByUser(user: any): Promise<OrderMobile[]> {
    return await this.ordermobileModel.find({ user: user._id }).exec();
  }

  //CREATE ORDERMOBILE
  async create(
    createMobiledevDto: CreateMobiledevDto,
    user: any,
    file: Express.Multer.File,
  ): Promise<OrderMobile> {
    const {
      Goal,
      appName,
      description,
      design,
      functionnality,
      plateform,
      typeapp,
    } = createMobiledevDto;
    let goalSplits: string[];
    let funcSplits: string[];
    let designLinks: [
      {
        public_id: string;
        url: string;
        format: string;
      },
    ] = [
      {
        public_id: '',
        url: '',
        format: '',
      },
    ];
    const result = await this.cloudinaryService.uploadImages(file, user);
    for (let i = 0; i < designLinks.length; i++) {
      designLinks[i].public_id = result.public_id;
      designLinks[i].url = result.secure_url;
      designLinks[i].format = result.format;
    }
    if (Goal) {
      goalSplits = Goal.split(',').map((s) => s.trim());
    }
    if (functionnality) {
      funcSplits = functionnality.split(',').map((s) => s.trim());
    }
    let ordermobileFields = {
      plateform: plateform && plateform,
      typeapp: typeapp && typeapp,
      appName: appName && appName,
      description: description && description,
      design: design && design,
      functionnality: funcSplits && funcSplits,
      Goal: goalSplits && goalSplits,
      designLinks: designLinks && designLinks,
    };
    try {
      return this.ordermobileModel.create(ordermobileFields);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
