import { HttpService } from '@nestjs/axios';
import { Repository } from 'typeorm';
import { ProjectEntity } from './entity/project.entity';
export declare class ProjectService {
    private projectRepository;
    private httpService;
    constructor(projectRepository: Repository<ProjectEntity>, httpService: HttpService);
    getProjectsFromGithub(githubAccessToken: any, username: any): Promise<{
        items: {
            user: {
                projectsV2: {
                    nodes: {
                        id: string;
                        title: string;
                        number: string;
                    };
                };
            };
        };
    }>;
    getProjectFromGithub(githubAccessToken: any, username: any, pV2Number: any): Promise<{
        item: {
            user: {
                projectV2: {
                    id: string;
                };
            };
        };
    }>;
}
