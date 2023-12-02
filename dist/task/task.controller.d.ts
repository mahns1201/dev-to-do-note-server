import { HttpStatus } from '@nestjs/common';
import { TaskService } from './task.service';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    createTask(request: any, body: any): Promise<{
        httpStatus: HttpStatus;
        message: string;
        item: import("./entity/task.entity").TaskEntity;
    }>;
    findTaskById(param: any): Promise<{
        items: {
            task: import("./entity/task.entity").TaskEntity;
            upload: any[];
        };
        httpStatus: HttpStatus;
        message: string;
    }>;
}
