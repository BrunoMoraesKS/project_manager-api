import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { DeleteAllProjectsController } from './DeleteAllProjectsController';
import { DeleteAllProjectsUseCase } from './DeleteAllProjectsUseCase';

const projectsRepository = new ProjectsRepository();
const deleteAllProjectsUseCase = new DeleteAllProjectsUseCase(
  projectsRepository
);
const deleteAllProjectsController = new DeleteAllProjectsController(
  deleteAllProjectsUseCase
);

export { deleteAllProjectsController };
