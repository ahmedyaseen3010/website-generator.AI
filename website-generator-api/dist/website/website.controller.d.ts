import { WebsiteService } from './website.service';
import { CreateWebsiteDto, WebsiteResponseDto } from './dto/create-website.dto';
export declare class WebsiteController {
    private readonly websiteService;
    constructor(websiteService: WebsiteService);
    create(createWebsiteDto: CreateWebsiteDto): Promise<{
        success: boolean;
        data: WebsiteResponseDto;
        message: string;
    }>;
    findAll(): Promise<{
        success: boolean;
        data: WebsiteResponseDto[];
        message: string;
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: WebsiteResponseDto;
        message: string;
    }>;
}
