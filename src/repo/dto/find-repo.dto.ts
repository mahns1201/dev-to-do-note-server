import { PagingResponseDto } from 'src/common/common.dto';
import { ApiProperty, PickType } from '@nestjs/swagger';
import { UserDto } from 'src/user/dto/user.dto';
import { RepoEntity } from '../entity/repo.entity';

export class InputFindReposDto extends PickType(UserDto, ['id'] as const) {
  page: number;
  limit: number;
}
export class OutputFindReposDto extends PagingResponseDto {
  @ApiProperty({ isArray: true })
  items: RepoEntity[];
}
