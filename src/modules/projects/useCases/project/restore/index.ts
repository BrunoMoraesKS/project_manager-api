import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { RestoreProjectsController } from './RestoreProjectsController';
import { RestoreProjectsUseCase } from './RestoreProjectsUseCase';

const projectsRepository = new ProjectsRepository();
const restoreProjectsUseCase = new RestoreProjectsUseCase(projectsRepository);
const restoreProjectsController = new RestoreProjectsController(
  restoreProjectsUseCase
);

export { restoreProjectsController };
