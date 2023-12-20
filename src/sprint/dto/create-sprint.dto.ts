import { OmitType } from '@nestjs/swagger';
import { SprintDto } from './sprint.dto';

export class InputCreateSprintDto extends OmitType(SprintDto, [
  'id',
  'user',
  'createdAt',
  'updatedAt',
  'deletedAt',
] as const) {}
// export class OutputCreateUserDto extends SwaggerResponseDto<SprintDto> {}
