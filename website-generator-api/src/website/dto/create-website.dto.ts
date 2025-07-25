// src/website/dto/create-website.dto.ts
import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateWebsiteDto {
  @IsNotEmpty({ message: 'Website idea is required' })
  @IsString({ message: 'Website idea must be a string' })
  @MinLength(3, { message: 'Website idea must be at least 5 characters long' })
  @MaxLength(200, { message: 'Website idea must not exceed 200 characters' })
  idea: string;
}

export class WebsiteSectionDto {
  name: string;
  content: string;
  order: number;
}

export class WebsiteResponseDto {
  id: string;
  idea: string;
  sections: WebsiteSectionDto[];
  createdAt: Date;
  updatedAt: Date;
}