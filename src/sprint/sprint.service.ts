import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SprintEntity } from './entity/sprint.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SprintService {
  constructor(
    @InjectRepository(SprintEntity)
    private sprintRepository: Repository<SprintEntity>,
  ) {}

  async create(
    input,
    // : InputCreateUserDto, // : Promise<ServiceResultDto<UserEntity>>
  ) {
    const newSprint = this.sprintRepository.create(input);
    const savedSprint = await this.sprintRepository.save(newSprint);

    Logger.log(`생성 완료`);

    return { item: savedSprint };
  }
}
