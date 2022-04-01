import {
  Body,
  Controller,
  Delete,
  Get,
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
import { Auth } from 'src/auth/auth.decorator';
import { Role } from 'src/auth/roles/role.enum';

@Controller('orderdesign')
@UseGuards(AuthGuard(['jwt', 'google']))
export class OrderdesignController {
  constructor(private readonly orderdesignService: OrderdesignService) {}

  //GET ALL ORDER DESIGN
  @Get()
  @Auth(Role.Admin)
  async getAll(): Promise<OrderDesign[]> {
    return await this.orderdesignService.getAll();
  }

  //GET ORDER DESIGN BY ID
  @Get(':id')
  @Auth(Role.Admin)
  async getById(id: string): Promise<OrderDesign> {
    return await this.orderdesignService.getById(id);
  }

  //DELETE ORDER DESIGN
  @Delete('/:id')
  @Auth(Role.Admin)
  async delete(id: string): Promise<OrderDesign> {
    return await this.orderdesignService.delete(id);
  }

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
