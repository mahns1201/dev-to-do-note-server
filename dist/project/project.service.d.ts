import { HttpService } from '@nestjs/axios';
import { Repository } from 'typeorm';
import { ProjectEntity } from './entity/project.entity';
export declare class ProjectService {
    private projectRepository;
    private httpService;
    constructor(projectRepository: Repository<ProjectEntity>, httpService: HttpService);
}
