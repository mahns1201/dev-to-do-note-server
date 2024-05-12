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
exports.OutputFindSprintsDto = exports.InputFindSprintsDto = void 0;
const common_dto_1 = require("../../common/common.dto");
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../../user/dto/user.dto");
class InputFindSprintsDto extends (0, swagger_1.PickType)(user_dto_1.UserDto, ['id']) {
}
exports.InputFindSprintsDto = InputFindSprintsDto;
class OutputFindSprintsDto extends common_dto_1.PagingResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true }),
    __metadata("design:type", Array)
], OutputFindSprintsDto.prototype, "items", void 0);
exports.OutputFindSprintsDto = OutputFindSprintsDto;
//# sourceMappingURL=find-sprint.dto.js.map