import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SprintEntity } from './entity/sprint.entity';
import { Repository } from 'typeorm';
import { InputCreateSprintDto } from './dto/create-sprint.dto';
import { ServiceResultDto } from 'src/common/common.dto';
import { RepoEntity } from 'src/repo/entity/repo.entity';

@Injectable()
export class SprintService {
  constructor(
    @InjectRepository(SprintEntity)
    private sprintRepository: Repository<SprintEntity>,
  ) {}

  async create(
    input: InputCreateSprintDto,
    repo: RepoEntity, // , //
  ): Promise<ServiceResultDto<SprintEntity>> {
    // const { repo } = input;

    const newSprint = this.sprintRepository.create({
      ...input,
      repo,
    });
    const savedSprint = await this.sprintRepository.save(newSprint);

    Logger.log(`생성 완료`);

    return { item: savedSprint };
  }
}
