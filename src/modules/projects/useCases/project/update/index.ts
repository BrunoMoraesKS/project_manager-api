import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { UpdateProjectController } from './UpdateProjectController';
import { UpdateProjectUseCase } from './UpdateProjectUseCase';

const projectsRepository = new ProjectsRepository();
const updateProjectUseCase = new UpdateProjectUseCase(projectsRepository);
const updateProjectController = new UpdateProjectController(
  updateProjectUseCase
);

export { updateProjectController };
