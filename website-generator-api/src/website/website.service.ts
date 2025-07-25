// src/website/website.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Website, WebsiteDocument } from './schemas/website.schema';
import { CreateWebsiteDto, WebsiteResponseDto } from './dto/create-website.dto';

@Injectable()
export class WebsiteService {
  constructor(
    @InjectModel(Website.name) private websiteModel: Model<WebsiteDocument>,
  ) {}

  async create(createWebsiteDto: CreateWebsiteDto): Promise<WebsiteResponseDto> {
    try {
      const sections = this.generateSections(createWebsiteDto.idea);
      
      const createdWebsite = new this.websiteModel({
        idea: createWebsiteDto.idea,
        sections,
      });

      const savedWebsite = await createdWebsite.save();
      return this.mapToResponseDto(savedWebsite);
    } catch (error) {
      throw new BadRequestException('Failed to create website: ' + error.message);
    }
  }

  async findAll(): Promise<WebsiteResponseDto[]> {
    try {
      const websites = await this.websiteModel.find().sort({ createdAt: -1 }).exec();
      return websites.map(website => this.mapToResponseDto(website));
    } catch (error) {
      throw new BadRequestException('Failed to fetch websites: ' + error.message);
    }
  }

  async findOne(id: string): Promise<WebsiteResponseDto> {
    try {
      const website = await this.websiteModel.findById(id).exec();
      if (!website) {
        throw new NotFoundException(`Website with ID ${id} not found`);
      }
      return this.mapToResponseDto(website);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException('Failed to fetch website: ' + error.message);
    }
  }

  private generateSections(idea: string) {
    // AI-like logic to generate sections based on the idea
    const ideaLower = idea.toLowerCase();
    const baseSections = [
      { name: 'Hero', content: '', order: 1 },
      { name: 'About', content: '', order: 2 },
      { name: 'Contact', content: '', order: 3 }
    ];

    // Generate contextual content based on the idea
    if (ideaLower.includes('bakery') || ideaLower.includes('restaurant') || ideaLower.includes('food')) {
      baseSections[0].content = `Welcome to our delicious ${idea} - Fresh, artisanal treats made daily`;
      baseSections[1].content = `Learn about our passion for creating the finest baked goods using traditional recipes and premium ingredients`;
      baseSections[2].content = `Visit us today or place an order online for pickup and delivery`;
    } else if (ideaLower.includes('tech') || ideaLower.includes('software') || ideaLower.includes('app')) {
      baseSections[0].content = `Innovative ${idea} - Transforming ideas into digital solutions`;
      baseSections[1].content = `Discover our cutting-edge technology and expert development team`;
      baseSections[2].content = `Ready to build something amazing? Get in touch with our team`;
    } else if (ideaLower.includes('portfolio') || ideaLower.includes('personal')) {
      baseSections[0].content = `Professional ${idea} - Showcasing creativity and expertise`;
      baseSections[1].content = `Explore my journey, skills, and passion for creating exceptional work`;
      baseSections[2].content = `Let's connect and discuss potential collaborations`;
    } else if (ideaLower.includes('ecommerce') || ideaLower.includes('shop') || ideaLower.includes('store')) {
      baseSections[0].content = `Premium ${idea} - Quality products at unbeatable prices`;
      baseSections[1].content = `Discover our carefully curated collection and commitment to customer satisfaction`;
      baseSections[2].content = `Shop now with free shipping on orders over $50`;
    } else {
      // Generic sections for any other idea
      baseSections[0].content = `Welcome to ${idea} - Your premier destination for excellence`;
      baseSections[1].content = `Learn more about our mission, values, and what makes us unique`;
      baseSections[2].content = `Get in touch with us to learn more or get started today`;
    }

    return baseSections;
  }

  // filepath: c:\Users\ahmed\website-generator-api\src\website\website.service.ts
    private mapToResponseDto(website: WebsiteDocument): WebsiteResponseDto {
    return {
        id: (website._id as any).toString(),
        idea: website.idea,
        sections: website.sections,
        createdAt: website.createdAt,
        updatedAt: website.updatedAt,
    };
    }
}