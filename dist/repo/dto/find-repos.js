"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputFindReposDto = exports.InputFindReposDto = void 0;
const common_dto_1 = require("../../common/common.dto");
const user_dto_1 = require("./user.dto");
const swagger_1 = require("@nestjs/swagger");
class InputFindReposDto extends (0, swagger_1.PickType)(user_dto_1.UserDto, ['email']) {
}
exports.InputFindReposDto = InputFindReposDto;
class OutputFindReposDto extends common_dto_1.SwaggerResponseDto {
}
exports.OutputFindReposDto = OutputFindReposDto;
//# sourceMappingURL=find-repos.js.map