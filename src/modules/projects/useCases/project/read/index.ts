import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { ReadProjectsController } from './ReadProjectsController';
import { ReadProjectsUseCase } from './ReadProjectsUseCase';

const projectsRepository = new ProjectsRepository();
const readProjectsUseCase = new ReadProjectsUseCase(projectsRepository);
const readProjectsController = new ReadProjectsController(readProjectsUseCase);

export { readProjectsController };
