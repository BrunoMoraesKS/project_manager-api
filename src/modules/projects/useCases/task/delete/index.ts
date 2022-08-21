import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { DeleteTaskController } from './DeleteTaskController';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';

const projectsRepository = new ProjectsRepository();
const deleteTaskUseCase = new DeleteTaskUseCase(projectsRepository);
const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);

export { deleteTaskController };
