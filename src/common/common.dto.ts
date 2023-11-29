import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class BaseTimeDto {
  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;
}

export class BaseResponseDto {
  @ApiProperty({ description: 'http 상태 코드' })
  httpStatus: HttpStatus;

  @ApiProperty({ description: 'api 응답 메시지' })
  message: string;
}

export interface ServiceResultDto<T> {
  items?: T;
  item?: T;
}

/**
 * @deprecated
 */
export class SwaggerResponseDto<T> {
  @ApiProperty({ description: 'http 상태 코드' })
  httpStatus: HttpStatus;

  @ApiProperty({ description: 'api 응답 메시지' })
  message: string;

  @ApiProperty({ description: 'api 응답 결과가 복수개 일 때의 결과' })
  items?: T[];

  @ApiProperty({ description: 'api 응답 결과가 단수개 일 때의 결과' })
  item?: T;
}
