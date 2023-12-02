import { BaseResponseDto, PagingResponseDto } from 'src/common/common.dto';
import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { UserDto } from 'src/user/dto/user.dto';
import { RepoEntity } from '../entity/repo.entity';
import { RepoDto } from './repo.dto';

export class InputFindUserReposDto extends PickType(UserDto, [
  'email',
] as const) {}

export class OutputUserDto extends OmitType(UserDto, [
  'password',
  'githubAccessToken',
] as const) {}

export class InputFindReposDto extends PickType(UserDto, ['id'] as const) {
  page: number;
  limit: number;
}
export class OutputFindReposDto extends PagingResponseDto {
  @ApiProperty({ isArray: true })
  items: RepoDto;
}
