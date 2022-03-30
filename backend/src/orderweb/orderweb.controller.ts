import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
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
  async create(
    @Body() createWebdevDto: CreateWebdevDto,
    @GetUser() user: any,
  ): Promise<OrderWeb> {
    return await this.orderwebService.create(createWebdevDto, user);
  }

  //UPLOAD IMAGE
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.orderwebService.uploadImage(file);
  }
}
