import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { ReadOneProjectController } from './ReadOneProjectController';
import { ReadOneProjectUseCase } from './ReadOneProjectUseCase';

const projectsRepository = new ProjectsRepository();
const readOneProjectUseCase = new ReadOneProjectUseCase(projectsRepository);
const readOneProjectController = new ReadOneProjectController(
  readOneProjectUseCase
);

export { readOneProjectController };
