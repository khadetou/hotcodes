import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { Auth } from 'src/auth/auth.decorator';
import { GetUser } from 'src/auth/get-user-decorator';
import { Role } from 'src/auth/roles/role.enum';
import { CreateMobiledevDto } from './dto/create-mobiledev.dto';
import { OrdermobileService } from './ordermobile.service';
import { OrderMobile } from './schema/ordermobile.schema';

@Controller('ordermobile')
@UseGuards(AuthGuard(['jwt', 'google']))
export class OrdermobileController {
  constructor(private readonly ordermobileService: OrdermobileService) {}

  //GET ALL ORDERMOBILE
  @Get()
  @Auth(Role.Admin)
  async findAll(): Promise<OrderMobile[]> {
    return await this.ordermobileService.findAll();
  }

  //GET ORDERMOBILE BY ID
  @Get(':id')
  @Auth(Role.Admin)
  async getOrderMobileById(id: string): Promise<OrderMobile> {
    return await this.ordermobileService.findOne(id);
  }

  //DELETE ORDERMOBILE
  @Delete('/:id')
  @Auth(Role.Admin)
  async delete(@Param('id') id: string): Promise<OrderMobile> {
    return await this.ordermobileService.delete(id);
  }

  //GET MY ORDERMOBILE
  @Get('/my')
  @Auth(Role.User)
  async getMyOrderMobile(user: any): Promise<OrderMobile[]> {
    return await this.ordermobileService.findMyOrder(user);
  }
  //CREATE ORDERMOBILE
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createMobiledevDto: CreateMobiledevDto,
    @GetUser() user: any,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<void | OrderMobile> {
    return await this.ordermobileService.create(createMobiledevDto, user, file);
  }
}
