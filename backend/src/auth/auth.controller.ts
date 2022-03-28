import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthUpdateCredentialsDto } from './dto/update-user-credentials.dto';
import { GetUser } from './get-user-decorator';
import { User } from './schema/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //GOOGLE SIGNIN
  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  async googleCallback(@GetUser() user: User) {
    return user;
  }

  //UPDATE USER
  @Put('/update/profile')
  async upadateUser(
    @Body() authUpdateCredentialsDto: AuthUpdateCredentialsDto,
  ): Promise<User> {
    return await this.authService.updateUser(authUpdateCredentialsDto);
  }

  //NORMAL SIGNIN
  @Post('/signup')
  async signup(@Body() authCredentialsDto: AuthCredentialsDto): Promise<User> {
    return await this.authService.createUser(authCredentialsDto);
  }

  @Post('/signin')
  async signin(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<{ accessToken: string }> {
    return await this.authService.signIn(email, password);
  }
}
