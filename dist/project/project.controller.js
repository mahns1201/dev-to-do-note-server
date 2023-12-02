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
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const project_service_1 = require("./project.service");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/jwt/auth.guard");
const user_service_1 = require("../user/user.service");
let ProjectController = class ProjectController {
    constructor(projectService, userService) {
        this.projectService = projectService;
        this.userService = userService;
    }
    async getProjectsFromGithub(request) {
        const { email, username } = request.user;
        const { item: { githubAccessToken }, } = await this.userService.findUser({ email });
        const { items } = await this.projectService.getProjectsFromGithub(githubAccessToken, username);
        return {
            items,
        };
    }
    async getProjectFromGithub(request, param) {
        const { email, username } = request.user;
        const { pV2Number } = param;
        const { item: { githubAccessToken }, } = await this.userService.findUser({ email });
        const { item } = await this.projectService.getProjectFromGithub(githubAccessToken, username, Number(pV2Number));
        return {
            item,
        };
    }
};
__decorate([
    (0, common_1.Get)('/github/list'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getProjectsFromGithub", null);
__decorate([
    (0, common_1.Get)('/github/:pV2Number'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getProjectFromGithub", null);
ProjectController = __decorate([
    (0, common_1.Controller)('project'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiTags)('project'),
    __metadata("design:paramtypes", [project_service_1.ProjectService,
        user_service_1.UserService])
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=project.controller.js.map