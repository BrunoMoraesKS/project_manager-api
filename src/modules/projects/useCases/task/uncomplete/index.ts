import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { UncompleteTaskController } from './UncompleteTaskController';
import { UncompleteTaskUseCase } from './UncompleteTaskUseCase';

const projectsRepository = new ProjectsRepository();
const uncompleteTaskUseCase = new UncompleteTaskUseCase(projectsRepository);
const uncompleteTaskController = new UncompleteTaskController(
  uncompleteTaskUseCase
);

export { uncompleteTaskController };
