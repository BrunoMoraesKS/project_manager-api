import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { ReadSoftdeletedProjectsController } from './ReadSoftdeletedProjectsController';
import { ReadSoftdeletedProjectsUseCase } from './ReadSoftdeletedProjectsUseCase';

const projectsRepository = new ProjectsRepository();
const readSoftdeletedProjectsUseCase = new ReadSoftdeletedProjectsUseCase(
  projectsRepository
);
const readSoftdeletedProjectsController = new ReadSoftdeletedProjectsController(
  readSoftdeletedProjectsUseCase
);

export { readSoftdeletedProjectsController };
