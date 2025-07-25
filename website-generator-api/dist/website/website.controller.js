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
exports.WebsiteController = void 0;
const common_1 = require("@nestjs/common");
const website_service_1 = require("./website.service");
const create_website_dto_1 = require("./dto/create-website.dto");
let WebsiteController = class WebsiteController {
    websiteService;
    constructor(websiteService) {
        this.websiteService = websiteService;
    }
    async create(createWebsiteDto) {
        try {
            const website = await this.websiteService.create(createWebsiteDto);
            return {
                success: true,
                data: website,
                message: 'Website sections generated successfully'
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Failed to generate website sections',
                error: 'Bad Request'
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        try {
            const websites = await this.websiteService.findAll();
            return {
                success: true,
                data: websites,
                message: 'Websites retrieved successfully'
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Failed to retrieve websites',
                error: 'Bad Request'
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            const website = await this.websiteService.findOne(id);
            return {
                success: true,
                data: website,
                message: 'Website retrieved successfully'
            };
        }
        catch (error) {
            const status = error.status || common_1.HttpStatus.BAD_REQUEST;
            throw new common_1.HttpException({
                success: false,
                message: error.message || 'Failed to retrieve website',
                error: status === 404 ? 'Not Found' : 'Bad Request'
            }, status);
        }
    }
};
exports.WebsiteController = WebsiteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_website_dto_1.CreateWebsiteDto]),
    __metadata("design:returntype", Promise)
], WebsiteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WebsiteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WebsiteController.prototype, "findOne", null);
exports.WebsiteController = WebsiteController = __decorate([
    (0, common_1.Controller)('api/websites'),
    __metadata("design:paramtypes", [website_service_1.WebsiteService])
], WebsiteController);
//# sourceMappingURL=website.controller.js.map