import { BaseEntity } from 'src/common/common.entity';
import { UserEntity } from 'src/user/entity/user.entity';
export declare class RepoEntity extends BaseEntity {
    id: number;
    user: UserEntity;
    repoName: string;
    language: string;
    imageUrl: string;
    defaultBranch: string;
    isPrivate: boolean;
    htmlUrl: string;
    description: string;
}
