import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { CreateTaskController } from './CreateTaskController';
import { CreateTaskUseCase } from './CreateTaskUseCase';

const projectsRepository = new ProjectsRepository();
const createTaskUseCase = new CreateTaskUseCase(projectsRepository);
const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController };
