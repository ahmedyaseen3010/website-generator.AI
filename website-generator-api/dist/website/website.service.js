"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const website_schema_1 = require("./schemas/website.schema");
let WebsiteService = class WebsiteService {
    websiteModel;
    constructor(websiteModel) {
        this.websiteModel = websiteModel;
    }
    async create(createWebsiteDto) {
        try {
            const sections = this.generateSections(createWebsiteDto.idea);
            const createdWebsite = new this.websiteModel({
                idea: createWebsiteDto.idea,
                sections,
            });
            const savedWebsite = await createdWebsite.save();
            return this.mapToResponseDto(savedWebsite);
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to create website: ' + error.message);
        }
    }
    async findAll() {
        try {
            const websites = await this.websiteModel.find().sort({ createdAt: -1 }).exec();
            return websites.map(website => this.mapToResponseDto(website));
        }
        catch (error) {
            throw new common_1.BadRequestException('Failed to fetch websites: ' + error.message);
        }
    }
    async findOne(id) {
        try {
            const website = await this.websiteModel.findById(id).exec();
            if (!website) {
                throw new common_1.NotFoundException(`Website with ID ${id} not found`);
            }
            return this.mapToResponseDto(website);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.BadRequestException('Failed to fetch website: ' + error.message);
        }
    }
    generateSections(idea) {
        const ideaLower = idea.toLowerCase();
        const baseSections = [
            { name: 'Hero', content: '', order: 1 },
            { name: 'About', content: '', order: 2 },
            { name: 'Contact', content: '', order: 3 }
        ];
        if (ideaLower.includes('bakery') || ideaLower.includes('restaurant') || ideaLower.includes('food')) {
            baseSections[0].content = `Welcome to our delicious ${idea} - Fresh, artisanal treats made daily`;
            baseSections[1].content = `Learn about our passion for creating the finest baked goods using traditional recipes and premium ingredients`;
            baseSections[2].content = `Visit us today or place an order online for pickup and delivery`;
        }
        else if (ideaLower.includes('tech') || ideaLower.includes('software') || ideaLower.includes('app')) {
            baseSections[0].content = `Innovative ${idea} - Transforming ideas into digital solutions`;
            baseSections[1].content = `Discover our cutting-edge technology and expert development team`;
            baseSections[2].content = `Ready to build something amazing? Get in touch with our team`;
        }
        else if (ideaLower.includes('portfolio') || ideaLower.includes('personal')) {
            baseSections[0].content = `Professional ${idea} - Showcasing creativity and expertise`;
            baseSections[1].content = `Explore my journey, skills, and passion for creating exceptional work`;
            baseSections[2].content = `Let's connect and discuss potential collaborations`;
        }
        else if (ideaLower.includes('ecommerce') || ideaLower.includes('shop') || ideaLower.includes('store')) {
            baseSections[0].content = `Premium ${idea} - Quality products at unbeatable prices`;
            baseSections[1].content = `Discover our carefully curated collection and commitment to customer satisfaction`;
            baseSections[2].content = `Shop now with free shipping on orders over $50`;
        }
        else {
            baseSections[0].content = `Welcome to ${idea} - Your premier destination for excellence`;
            baseSections[1].content = `Learn more about our mission, values, and what makes us unique`;
            baseSections[2].content = `Get in touch with us to learn more or get started today`;
        }
        return baseSections;
    }
    mapToResponseDto(website) {
        return {
            id: website._id.toString(),
            idea: website.idea,
            sections: website.sections,
            createdAt: website.createdAt,
            updatedAt: website.updatedAt,
        };
    }
};
exports.WebsiteService = WebsiteService;
exports.WebsiteService = WebsiteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(website_schema_1.Website.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], WebsiteService);
//# sourceMappingURL=website.service.js.map