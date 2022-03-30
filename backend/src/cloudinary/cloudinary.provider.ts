import { ConfigService } from '@nestjs/config';
import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: async (configService: ConfigService) => {
    const cloudinary = v2.config({
      cloud_name: 'didh3wbru',
      api_key: '299593682714689',
      api_secret: '5SLVYG27QnmLgYjHKJjtyhMcZ5k',
    });
    return cloudinary;
  },
};
