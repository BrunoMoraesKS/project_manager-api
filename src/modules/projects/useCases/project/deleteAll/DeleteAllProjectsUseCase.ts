import { IProjectsRepository } from '../../../repositories/IProjectsRepository';
import { AppError } from '../../../../../errors/AppError';
import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';

class DeleteAllProjectsUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}

  async execute() {
    const prisma = ProjectsRepository.getPrismaInstance();

    this.projectsRepository.deleteAll();
  }
}

export { DeleteAllProjectsUseCase };
