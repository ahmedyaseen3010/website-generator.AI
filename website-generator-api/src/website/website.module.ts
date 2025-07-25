// src/website/website.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebsiteController } from './website.controller';
import { WebsiteService } from './website.service';
import { Website, WebsiteSchema } from './schemas/website.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Website.name, schema: WebsiteSchema }
    ]),
  ],
  controllers: [WebsiteController],
  providers: [WebsiteService],
})
export class WebsiteModule {}