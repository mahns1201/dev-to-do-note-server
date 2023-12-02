import { BaseTimeDto } from 'src/common/common.dto';
export declare class RepoDto extends BaseTimeDto {
    id: number;
    user: number;
    repoName: string;
    language: string;
    imageUrl: string;
    defaultBranch: string;
    isPrivate: boolean;
    htmlUrl: string;
    description: string;
}
