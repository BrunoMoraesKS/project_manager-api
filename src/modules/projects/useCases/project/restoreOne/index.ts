import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { RestoreOneProjectController } from './RestoreOneProjectController';
import { RestoreOneProjectUseCase } from './RestoreOneProjectUseCase';

const projectsRepository = new ProjectsRepository();
const restoreOneProjectUseCase = new RestoreOneProjectUseCase(
  projectsRepository
);
const restoreOneProjectController = new RestoreOneProjectController(
  restoreOneProjectUseCase
);

export { restoreOneProjectController };
