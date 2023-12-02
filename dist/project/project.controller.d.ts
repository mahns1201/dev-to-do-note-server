import { ProjectService } from './project.service';
import { UserService } from 'src/user/user.service';
export declare class ProjectController {
    private projectService;
    private userService;
    constructor(projectService: ProjectService, userService: UserService);
    getProjectsFromGithub(request: any): Promise<{
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
    getProjectFromGithub(request: any, param: any): Promise<{
        item: {
            user: {
                projectV2: {
                    id: string;
                };
            };
        };
    }>;
}
