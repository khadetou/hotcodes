import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
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

  //GET ALL ORDERWEB
  async getAllOrderWeb(): Promise<OrderWeb[]> {
    return await this.orderwebModel.find().exec();
  }

  //GET ORDERWEB BY ID
  async getOrderWebById(id: string): Promise<OrderWeb> {
    const user = await this.orderwebModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('OrderWeb not found with that id');
    }
    return user;
  }

  //GET MY ORDERWEB
  async getMyOrderWeb(user: any): Promise<OrderWeb[]> {
    return await this.orderwebModel.find({ user: user._id }).exec();
  }

  //DELETE ORDERWEB
  async delete(id: string): Promise<OrderWeb> {
    const result = await this.orderwebModel.findByIdAndRemove(id).exec();
    console.log(result);
    if (!result) {
      throw new InternalServerErrorException('OrderWeb not found');
    }
    return result;
  }

  //DELETE MY ORDERWEB
  async deleteMyOrderWeb(id: string, user: any): Promise<OrderWeb> {
    const orderweb = await this.orderwebModel.findById(id).exec();
    if (orderweb.user.toString() !== user._id.toString()) {
      throw new BadRequestException('You are not authorized');
    }
    return await this.orderwebModel.findByIdAndDelete(id).exec();
  }

  //CREATE ORDERWEB
  async create(
    createWebdevDto: CreateWebdevDto,
    user: any,
    file: Express.Multer.File,
  ): Promise<OrderWeb> {
    const { goal, description, functionnality, plateform, typeapp } =
      createWebdevDto;

    console.log(goal);
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

    const result =
      file && (await this.cloudinaryService.uploadImages(file, user));

    if (result) {
      for (let i = 0; i < designLinks.length; i++) {
        designLinks[i].public_id = result.public_id;
        designLinks[i].url = result.secure_url;
        designLinks[i].format = result.format;
      }
    }

    if (goal) {
      goalSplits = goal.split(',').map((s) => s.trim());
    }

    if (functionnality) {
      funcSplits = functionnality.split(',').map((s) => s.trim());
    }

    let orderwebFields = {
      user: user._id,
      plateform: plateform && plateform,
      typeapp: typeapp && typeapp,
      appName: description && description,
      description: description && description,
      goal: goal && goalSplits,
      design: result && designLinks,
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
