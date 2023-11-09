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
exports.GithubOauthController = void 0;
const common_1 = require("@nestjs/common");
const github_oauth_guard_1 = require("./github-oauth.guard");
const swagger_1 = require("@nestjs/swagger");
let GithubOauthController = class GithubOauthController {
    async githubAuth() {
    }
    async githubAuthCallback(req) {
        const { user: { user, accessToken }, } = req;
        const item = { user, accessToken };
        const httpStatus = !accessToken
            ? common_1.HttpStatus.INTERNAL_SERVER_ERROR
            : common_1.HttpStatus.OK;
        const message = !accessToken
            ? 'Github 로그인을 알 수 없는 이유로 실패하였습니다.'
            : 'Github 로그인을 성공하였습니다.';
        const result = { item, httpStatus, message };
        return result;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Github OAuth',
        description: 'Github OAuth 요청 컨트롤러',
    }),
    (0, common_1.UseGuards)(github_oauth_guard_1.GithubOauthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GithubOauthController.prototype, "githubAuth", null);
__decorate([
    (0, common_1.Get)('callback'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Github OAuth Callback',
        description: 'Github OAuth Callback 컨트롤러',
    }),
    (0, common_1.UseGuards)(github_oauth_guard_1.GithubOauthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GithubOauthController.prototype, "githubAuthCallback", null);
GithubOauthController = __decorate([
    (0, common_1.Controller)('auth/github'),
    (0, swagger_1.ApiTags)('oauth - github')
], GithubOauthController);
exports.GithubOauthController = GithubOauthController;
//# sourceMappingURL=github-oauth.controller.js.map