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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteResponseDto = exports.WebsiteSectionDto = exports.CreateWebsiteDto = void 0;
const class_validator_1 = require("class-validator");
class CreateWebsiteDto {
    idea;
}
exports.CreateWebsiteDto = CreateWebsiteDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Website idea is required' }),
    (0, class_validator_1.IsString)({ message: 'Website idea must be a string' }),
    (0, class_validator_1.MinLength)(3, { message: 'Website idea must be at least 5 characters long' }),
    (0, class_validator_1.MaxLength)(200, { message: 'Website idea must not exceed 200 characters' }),
    __metadata("design:type", String)
], CreateWebsiteDto.prototype, "idea", void 0);
class WebsiteSectionDto {
    name;
    content;
    order;
}
exports.WebsiteSectionDto = WebsiteSectionDto;
class WebsiteResponseDto {
    id;
    idea;
    sections;
    createdAt;
    updatedAt;
}
exports.WebsiteResponseDto = WebsiteResponseDto;
//# sourceMappingURL=create-website.dto.js.map