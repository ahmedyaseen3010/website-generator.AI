export declare class CreateWebsiteDto {
    idea: string;
}
export declare class WebsiteSectionDto {
    name: string;
    content: string;
    order: number;
}
export declare class WebsiteResponseDto {
    id: string;
    idea: string;
    sections: WebsiteSectionDto[];
    createdAt: Date;
    updatedAt: Date;
}
