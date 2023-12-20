import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt/auth.guard';
import { UserService } from 'src/user/user.service';
import { SprintService } from './sprint.service';
import {
  InputCreateSprintDto,
  OutputCreateSprintDto,
} from './dto/create-sprint.dto';
import { jwtUserT } from 'src/constant/jwt.constant';
import { User } from 'src/decorator/user.decorator';
import { RepoService } from 'src/repo/repo.service';
import { ErrorResponseDto } from 'src/common/common.dto';

@Controller('sprint')
@UseGuards(AuthGuard)
@ApiTags('sprint')
@ApiBearerAuth('accessToken')
export class SprintController {
  constructor(
    private sprintService: SprintService,
    private userService: UserService,
    private repoService: RepoService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: '스프린트를 생성한다.' })
  @ApiCreatedResponse({
    type: OutputCreateSprintDto,
    status: HttpStatus.CREATED,
  })
  @ApiBadRequestResponse({
    type: ErrorResponseDto,
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiUnauthorizedResponse({
    type: ErrorResponseDto,
    status: HttpStatus.UNAUTHORIZED,
  })
  @ApiInternalServerErrorResponse({
    type: ErrorResponseDto,
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  async create(
    @User() user: jwtUserT,
    @Body() input: InputCreateSprintDto,
  ): Promise<OutputCreateSprintDto> {
    const { id: userId } = user;
    const { repo: repoId } = input;
    input['user'] = userId;

    const { item: repo } = await this.repoService.findOne({ id: repoId });
    const { item: createdSprint } = await this.sprintService.create(
      input,
      repo,
    );

    return {
      httpStatus: HttpStatus.CREATED,
      message: '스프린트가 성공적으로 생성되었습니다.',
      item: createdSprint,
    };
  }
}
