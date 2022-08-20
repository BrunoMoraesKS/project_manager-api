import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { SoftdeleteProjectController } from './SoftdeleteProjectController';
import { SoftdeleteProjectUseCase } from './SoftdeleteProjectUseCase';

const projectsRepository = new ProjectsRepository();
const softdeleteProjectUseCase = new SoftdeleteProjectUseCase(
  projectsRepository
);
const softdeleteProjectController = new SoftdeleteProjectController(
  softdeleteProjectUseCase
);

export { softdeleteProjectController };
