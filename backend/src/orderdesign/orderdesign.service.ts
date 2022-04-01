import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OrderDesign } from './schema/orderdesing.schema';
import { Model } from 'mongoose';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { CreateOrderDesignDto } from './dto/create-design.dto';

@Injectable()
export class OrderdesignService {
  constructor(
    @InjectModel(OrderDesign.name)
    private readonly orderwebModel: Model<OrderDesign>,
    private cloudinaryService: CloudinaryService,
  ) {}

  //GET ALL ORDER DESIGN
  async getAll(): Promise<OrderDesign[]> {
    return await this.orderwebModel.find().exec();
  }

  //GET ORDER DESIGN BY ID
  async getById(id: string): Promise<OrderDesign> {
    return await this.orderwebModel.findById(id).exec();
  }

  //DELETE ORDER DESIGN
  async delete(id: string): Promise<OrderDesign> {
    return await this.orderwebModel.findByIdAndDelete(id).exec();
  }

  //CREATE ORDERDESIGN
  async create(
    createOrderDesignDto: CreateOrderDesignDto,
    user: any,
    file: Express.Multer.File,
  ): Promise<OrderDesign> {
    const {
      plateform,
      description,
      typeapp,
      Goal,
      appName,
      functionnality,
      moodBoard,
      target,
      wireframe,
    } = createOrderDesignDto;

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

    let orderwebFields = {
      plateform: plateform && plateform,
      typeapp: typeapp && typeapp,
      appName: appName && appName,
      description: description && description,
      Goal: goalSplits && goalSplits,
      functionnality: funcSplits && funcSplits,
      design: designLinks && designLinks,
      moodBoard: moodBoard && moodBoard,
      target: target && target,
      wireframe: wireframe && wireframe,
    };

    let orderweb = await this.orderwebModel.findOne({ user: user._id });
    if (orderweb) {
      orderweb = await this.orderwebModel.findOneAndUpdate(
        { user: user._id },
        orderwebFields,
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
}
