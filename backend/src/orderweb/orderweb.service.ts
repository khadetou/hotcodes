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
  async create(
    createWebdevDto: CreateWebdevDto,
    user: any,
    file: Express.Multer.File,
  ): Promise<OrderWeb> {
    const { Goal, description, functionnality, plateform, typeapp } =
      createWebdevDto;

    let goalSplits: string[];
    let funcSplits: string[];
    let designLinks: [
      {
        public_id: string;
        url: string;
      },
    ] = [
      {
        public_id: '',
        url: '',
      },
    ];

    const result = await this.cloudinaryService.uploadImages(file);

    for (let i = 0; i < designLinks.length; i++) {
      designLinks[i].public_id = result.public_id;
      designLinks[i].url = result.secure_url;
    }

    console.log(designLinks);

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
      design: designLinks && designLinks,
      functionnality: functionnality && funcSplits,
    };

    orderwebFields.design = designLinks;

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
