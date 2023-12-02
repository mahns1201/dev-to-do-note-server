import { Repository } from 'typeorm';
import { TaskEntity } from './entity/task.entity';
import { UploadService } from 'src/upload/upload.service';
import { RepoService } from 'src/repo/repo.service';
import { UserService } from 'src/user/user.service';
export declare class TaskService {
    private taskRepository;
    private userService;
    private repoService;
    private uploadService;
    constructor(taskRepository: Repository<TaskEntity>, userService: UserService, repoService: RepoService, uploadService: UploadService);
    createOne(input: any): Promise<TaskEntity>;
    findOne(id: any): Promise<{
        task: TaskEntity;
        upload: any[];
    }>;
}
