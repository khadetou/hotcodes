import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExpressAdapter, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path from 'path';
import { GetUser } from 'src/auth/get-user-decorator';
import { CreateWebdevDto } from './dto/create-webdev.dto';
import { OrderwebService } from './orderweb.service';
import { OrderWeb } from './schema/orderweb.schema';

@Controller('orderweb')
@UseGuards(AuthGuard(['jwt', 'google']))
export class OrderwebController {
  constructor(private readonly orderwebService: OrderwebService) {}

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
    console.log(file);
    return this.orderwebService.uploadImage(file);
  }
}
