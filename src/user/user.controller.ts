import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { OutputFindUserDto } from './dto/find-user.dto';
import { AuthGuard } from 'src/auth/jwt/auth.guard';

@Controller('user')
@ApiBearerAuth('accessToken')
@ApiTags('USER')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ description: 'JWT 토큰으로 유저를 조회한다.' })
  @ApiOkResponse({
    type: OutputFindUserDto,
    status: HttpStatus.OK,
    description: '유저',
  })
  async findOne(@Request() request): Promise<OutputFindUserDto> {
    const { id: userId } = request.user;

    const {
      item: { password, githubAccessToken, ...outputUser },
    } = await this.userService.findOne(userId);
    const httpStatus = !outputUser ? HttpStatus.NOT_FOUND : HttpStatus.OK;
    const message = !outputUser
      ? '유저를 찾을 수 없습니다.'
      : '유저를 성공적으로 찾았습니다.';

    return { item: outputUser, httpStatus, message };
  }
}

// @Post()
// @HttpCode(HttpStatus.CREATED)
// @ApiOperation({
//   summary: '유저 생성',
//   description: '새로운 유저를 생성합니다.',
// })
// @ApiResponse({
//   type: OutputFindUserDto,
//   status: HttpStatus.CREATED,
//   description: '유저를 성공적으로 생성하였습니다.',
// })
// @ApiResponse({
//   type: OutputFindUserDto,
//   status: HttpStatus.INTERNAL_SERVER_ERROR,
//   description: '유저를  알 수 없는 이유로 생성할 수 없습니다.',
// })
// async create(
//   @Body() input: InputCreateUserDto,
// ): Promise<OutputCreateUserDto> {
//   const { item } = await this.userService.createUser(input);
//   const httpStatus = !item
//     ? HttpStatus.INTERNAL_SERVER_ERROR
//     : HttpStatus.CREATED;
//   const message = !item
//     ? '유저 생성에 실패했습니다.'
//     : '유저가 성공적으로 생성되었습니다.';

//   const result = { item, httpStatus, message };
//   return result;
// }

// @Get()
// async findAll(): Promise<UserEntity[]> {
//   return this.userService.findAll();
// }

// @Put(':id')
// async update(
//   @Param('id') id: string,
//   @Body() user: UserEntity,
// ): Promise<number> {
//   return this.userService.update(+id, user);
// }

// @Delete(':id')
// async remove(@Param('id') id: string): Promise<number> {
//   return this.userService.remove(+id);
// }
