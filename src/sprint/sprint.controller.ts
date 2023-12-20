import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/jwt/auth.guard';
import { UserService } from 'src/user/user.service';
import { SprintService } from './sprint.service';
import { InputCreateSprintDto } from './dto/create-sprint.dto';

@Controller('sprint')
@UseGuards(AuthGuard)
@ApiTags('sprint')
@ApiBearerAuth('accessToken')
export class SprintController {
  constructor(
    private sprintService: SprintService,
    private userService: UserService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() input: InputCreateSprintDto) {
    console.log(input);
    // const { item: sprint } = await this.sprintService.create(input);

    // console.log(sprint);
  }
  // @ApiOperation({ summary: '스프린트를 생성한다.' })
  // @ApiCreatedResponse({
  //   type: OutputFindReposDto,
  //   status: HttpStatus.OK,
  // })
  // @ApiBadRequestResponse({
  //   type: ErrorResponseDto,
  //   status: HttpStatus.BAD_REQUEST,
  // })
  // @ApiUnauthorizedResponse({
  //   type: ErrorResponseDto,
  //   status: HttpStatus.UNAUTHORIZED,
  // })
  // @ApiNotFoundResponse({
  //   type: ErrorResponseDto,
  //   status: HttpStatus.NOT_FOUND,
  // })
  // @ApiInternalServerErrorResponse({
  //   type: ErrorResponseDto,
  //   status: HttpStatus.INTERNAL_SERVER_ERROR,
  // })
}
