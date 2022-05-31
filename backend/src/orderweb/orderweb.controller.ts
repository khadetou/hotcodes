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
import { CreateWebdevDto } from './dto/create-webdev.dto';
import { OrderwebService } from './orderweb.service';
import { OrderWeb } from './schema/orderweb.schema';

@Controller('orderweb')
@UseGuards(AuthGuard(['jwt', 'google']))
export class OrderwebController {
  constructor(private readonly orderwebService: OrderwebService) {}

  //GET ALL ORDERWEB
  @Get()
  @Auth(Role.Admin)
  async getAllOrderWeb(): Promise<OrderWeb[]> {
    return await this.orderwebService.getAllOrderWeb();
  }

  //GET ORDERWEB BY ID
  @Get(':id')
  @Auth(Role.Admin)
  async getOrderWebById(@Param('id') id: string): Promise<OrderWeb> {
    return await this.orderwebService.getOrderWebById(id);
  }

  //GET MY ORDERWEB

  @Get('/my')
  async getMyOrderWeb(user: any): Promise<OrderWeb[]> {
    return await this.orderwebService.getMyOrderWeb(user);
  }

  //DELETE ORDERWEB
  @Delete('/:id')
  @Auth(Role.Admin)
  async delete(@Param('id') id: string): Promise<OrderWeb> {
    return await this.orderwebService.delete(id);
  }

  //DELETE MY ORDERWEB
  @Delete('/my/:id')
  async deleteMyOrderWeb(
    @Param('id') id: string,
    @GetUser() user: any,
  ): Promise<OrderWeb> {
    return await this.orderwebService.deleteMyOrderWeb(id, user);
  }

  //CREATE ORDERWEB
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createWebdevDto: CreateWebdevDto,
    @GetUser() user: any,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<void | OrderWeb> {
    
    return await this.orderwebService.create(createWebdevDto, user, file);
  }

  //UPLOAD IMAGE
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.orderwebService.uploadImage(file);
  }
}
