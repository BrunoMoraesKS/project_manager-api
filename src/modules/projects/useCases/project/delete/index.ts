import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { DeleteProjectController } from './DeleteProjectController';
import { DeleteProjectUseCase } from './DeleteProjectUseCase';

const projectsRepository = new ProjectsRepository();
const deleteProjectUseCase = new DeleteProjectUseCase(projectsRepository);
const deleteProjectController = new DeleteProjectController(
  deleteProjectUseCase
);

export { deleteProjectController };
