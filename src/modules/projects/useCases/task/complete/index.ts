import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { CompleteTaskController } from './CompleteTaskController';
import { CompleteTaskUseCase } from './CompleteTaskUseCase';

const projectsRepository = new ProjectsRepository();
const completeTaskUseCase = new CompleteTaskUseCase(projectsRepository);
const completeTaskController = new CompleteTaskController(completeTaskUseCase);

export { completeTaskController };
