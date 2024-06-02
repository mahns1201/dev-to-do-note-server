import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { SprintDao } from './sprint.dao';
import { FindSprintByIdDto } from './dto/find-sprint.dto';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { RepoService } from 'src/repo/repo.service';

@Injectable()
export class SprintService {
  constructor(
    private readonly sprintDao: SprintDao,
    private readonly repoService: RepoService,
  ) {}

  async createSprint(dto: CreateSprintDto) {
    const { repoId, userId } = dto;
    await this.repoService.findRepo({ id: repoId, userId }); // 레포지토리 존재 여부 확인 및 권한 확인

    return await this.sprintDao.create(dto);
  }

  async findSprint(dto: FindSprintByIdDto) {
    const { id, userId } = dto;
    const sprint = await this.sprintDao.findById(id);

    if (!sprint) {
      throw new NotFoundException('스프린트를 찾을 수 없습니다.');
    }

    if (sprint.user.id !== userId) {
      throw new UnauthorizedException('접근 권한이 없습니다.');
    }

    return sprint;
  }
}
