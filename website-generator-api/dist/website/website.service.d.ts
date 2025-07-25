import { Model } from 'mongoose';
import { WebsiteDocument } from './schemas/website.schema';
import { CreateWebsiteDto, WebsiteResponseDto } from './dto/create-website.dto';
export declare class WebsiteService {
    private websiteModel;
    constructor(websiteModel: Model<WebsiteDocument>);
    create(createWebsiteDto: CreateWebsiteDto): Promise<WebsiteResponseDto>;
    findAll(): Promise<WebsiteResponseDto[]>;
    findOne(id: string): Promise<WebsiteResponseDto>;
    private generateSections;
    private mapToResponseDto;
}
