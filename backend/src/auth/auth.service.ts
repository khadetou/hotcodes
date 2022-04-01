import {
  ConflictException,
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
import { AuthUpdateCredentialsDto } from './dto/update-user-credentials.dto';
import * as crypto from 'crypto';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  //GET ALL USERS
  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  //GET USER BY ID
  async getUserById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  //DELTE USER
  async deleteUser(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id).exec();
  }

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
    let user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      user = new this.userModel({
        firstName,
        lastName,
        email,
        phone,
        password: hashedPassword,
      });
      try {
        return await user.save();
      } catch (err) {
        throw new InternalServerErrorException(err);
      }
    } else {
      throw new ConflictException('User already exists');
    }
  }

  //UPDATE USER CREDENTIALS
  async updateUser(authUpdateCredentialsDto: AuthUpdateCredentialsDto) {
    const { firstName, lastName, email, phone, password } =
      authUpdateCredentialsDto;
    const user = await this.userModel.findOne({ email }).exec();
    if (user) {
      if (password) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;
      }
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      user.phone = phone || user.phone;
      try {
        return await user.save();
      } catch (err) {
        throw new InternalServerErrorException(err);
      }
    } else {
      throw new UnauthorizedException('User with that email not found');
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

  //FORGOT PASSWORD
  async forgotPassword(email: string): Promise<{ message: string }> {
    const user = await this.userModel.findOne({ email }).exec();
    if (user) {
      const resetToken = crypto.randomBytes(20).toString('hex');

      user.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

      user.resetPasswordExpiration = new Date(Date.now() + 10 * 60 * 1000);
      await user.save({ validateBeforeSave: false });

      try {
        await this.mailService.sendUserConfirmation(user, resetToken);
        return { message: 'Email Sent successfully' };
      } catch (error) {
        throw new InternalServerErrorException(error.message);
      }
    } else {
      throw new UnauthorizedException('User with that email not found');
    }
  }

  //RESET PASSWORD
  async resetPassword(resetToken: string, password: string): Promise<User> {
    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const user = await this.userModel
      .findOne({
        resetPasswordToken,
        resetPasswordExpiration: { $gt: new Date() },
      })
      .exec();

    if (user) {
      if (user.resetPasswordExpiration.getTime() > Date.now()) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiration = undefined;
        try {
          return await user.save();
        } catch (err) {
          throw new InternalServerErrorException(err);
        }
      } else {
        throw new UnauthorizedException('Reset token has expired');
      }
    } else {
      throw new UnauthorizedException('Invalid reset token');
    }
  }
}
