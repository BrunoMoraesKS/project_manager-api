import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { UpdateTaskController } from './UpdateTaskController';
import { UpdateTaskUseCase } from './UpdateTaskUseCase';

const projectsRepository = new ProjectsRepository();
const updateTaskUseCase = new UpdateTaskUseCase(projectsRepository);
const updateTaskController = new UpdateTaskController(updateTaskUseCase);

export { updateTaskController };
