import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User, UserDocument } from './schema/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  //FIND USER BY EMAIL
  async findUserByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).exec();
  }

  //FIND USER BY GOOGLE ID
  async findUserByGoogleId(googleId: string): Promise<User> {
    return await this.userModel.findOne({ googleId }).exec();
  }

  //CREATE USER WITH GOOGLE AUTH
  async createUserWithGoogle(
    firstName: string,
    lastName: string,
    email: string,
    googleId: string,
  ): Promise<User> {
    const user = new this.userModel({
      firstName,
      lastName,
      email,
      googleId,
    });
    try {
      return await user.save();
    } catch (err) {
      if (err.code === 11000) {
        throw new Error('User already exists');
      } else {
        throw new InternalServerErrorException(err);
      }
    }
  }

  //CREATE USER WITH EMAIL AND PASSWORD
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<User> {
    const { firstName, lastName, email, phone, password } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new this.userModel({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });
    try {
      return await user.save();
    } catch (err) {
      if (err.code === 11000) {
        throw new Error('User already exists');
      } else {
        throw new InternalServerErrorException(err);
      }
    }
  }

  //LOGIN USER WITH EMAIL AND PASSWORD
  async signIn(
    email: string,
    password: string,
  ): Promise<{ accessToken: string }> {
    const user = await this.userModel.findOne({ email }).exec();
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
