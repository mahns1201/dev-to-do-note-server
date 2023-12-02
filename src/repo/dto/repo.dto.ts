import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseTimeDto } from 'src/common/common.dto';

export class RepoDto extends BaseTimeDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  user: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  repoName: string;
}
