// src/website/website.controller.ts
import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  ValidationPipe, 
  HttpStatus,
  HttpException
} from '@nestjs/common';
import { WebsiteService } from './website.service';
import { CreateWebsiteDto, WebsiteResponseDto } from './dto/create-website.dto';

@Controller('api/websites')
export class WebsiteController {
  constructor(private readonly websiteService: WebsiteService) {}

  @Post()
  async create(
    @Body(new ValidationPipe({ 
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true 
    })) 
    createWebsiteDto: CreateWebsiteDto
  ): Promise<{ 
    success: boolean; 
    data: WebsiteResponseDto; 
    message: string 
  }> {
    try {
      const website = await this.websiteService.create(createWebsiteDto);
      return {
        success: true,
        data: website,
        message: 'Website sections generated successfully'
      };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Failed to generate website sections',
          error: 'Bad Request'
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Get()
  async findAll(): Promise<{ 
    success: boolean; 
    data: WebsiteResponseDto[]; 
    message: string 
  }> {
    try {
      const websites = await this.websiteService.findAll();
      return {
        success: true,
        data: websites,
        message: 'Websites retrieved successfully'
      };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Failed to retrieve websites',
          error: 'Bad Request'
        },
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<{ 
    success: boolean; 
    data: WebsiteResponseDto; 
    message: string 
  }> {
    try {
      const website = await this.websiteService.findOne(id);
      return {
        success: true,
        data: website,
        message: 'Website retrieved successfully'
      };
    } catch (error) {
      const status = error.status || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        {
          success: false,
          message: error.message || 'Failed to retrieve website',
          error: status === 404 ? 'Not Found' : 'Bad Request'
        },
        status
      );
    }
  }
}