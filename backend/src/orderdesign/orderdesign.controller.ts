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
import { OrderdesignService } from './orderdesign.service';
import { OrderDesign } from './schema/orderdesing.schema';
import { CreateOrderDesignDto } from './dto/create-design.dto';

@Controller('orderdesign')
@UseGuards(AuthGuard(['jwt', 'google']))
export class OrderdesignController {
  constructor(private readonly orderdesignService: OrderdesignService) {}

  //CREATE ORDERDESIGN
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() createOrderdesignDto: CreateOrderDesignDto,
    @GetUser() user: any,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<void | OrderDesign> {
    return await this.orderdesignService.create(
      createOrderdesignDto,
      user,
      file,
    );
  }
}
