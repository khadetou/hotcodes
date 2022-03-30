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
import { CreateMobiledevDto } from './dto/create-mobiledev.dto';
import { OrdermobileService } from './ordermobile.service';
import { OrderMobile } from './schema/ordermobile.schema';

@Controller('ordermobile')
@UseGuards(AuthGuard(['jwt', 'google']))
export class OrdermobileController {
  constructor(private readonly ordermobileService: OrdermobileService) {}

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
