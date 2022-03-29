import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/schema/user.schema';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User, token: string) {
    const url = `http://localhost:3000/auth/confirm-email/${token}`;
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Confirm your email',
      template: 'confirmation',
      context: {
        url: url,
      },
    });
  }
}
