import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
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

  //NORMAL SIGNIN
  @Post('/singup')
  async signup(@Body() authCredentialsDto: AuthCredentialsDto): Promise<User> {
    return await this.authService.createUser(authCredentialsDto);
  }

  @Post('/singin')
  async signin(
    @Body('email') email: string,
    @Body() password: string,
  ): Promise<{ accessToken: string }> {
    return await this.authService.signIn(email, password);
  }
}
