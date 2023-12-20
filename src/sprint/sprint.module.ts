import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepoEntity } from 'src/repo/entity/repo.entity';
import { SprintEntity } from './entity/sprint.entity';
import { UserEntity } from 'src/user/entity/user.entity';
import { SprintController } from './sprint.controller';
import { SprintService } from './sprint.service';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([SprintEntity, UserEntity, RepoEntity])],
  controllers: [SprintController],
  providers: [SprintService, UserService],
})
export class SprintModule {}
