import { BaseEntity } from 'src/common/common.entity';
import { UserEntity } from 'src/user/entity/user.entity';
import { RepoEntity } from 'src/repo/entity/repo.entity';
export declare class SprintEntity extends BaseEntity {
    id: number;
    user: UserEntity;
    repo: RepoEntity;
    title: string;
    description: string;
    startAt: Date;
    endAt: Date;
}
