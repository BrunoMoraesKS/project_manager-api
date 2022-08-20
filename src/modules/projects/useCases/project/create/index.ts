import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { CreateProjectController } from './CreateProjectController';
import { CreateProjectUseCase } from './CreateProjectUseCase';

const projectsRepository = new ProjectsRepository();
const createProjectUseCase = new CreateProjectUseCase(projectsRepository);
const createProjectController = new CreateProjectController(
  createProjectUseCase
);

export { createProjectController };
