import { IProjectsRepository } from '../../../repositories/IProjectsRepository';
import { AppError } from '../../../../../errors/AppError';
import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';

interface IRequest {
  id: string;
}

class RestoreOneProjectUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}

  async execute({ id }: IRequest) {
    const prisma = ProjectsRepository.getPrismaInstance();

    const project = await prisma.project.findFirst({
      where: {
        id,
      },
    });

    if (!project) {
      throw new AppError('Project not found', 404);
    }

    this.projectsRepository.restoreOne({ id });
  }
}

export { RestoreOneProjectUseCase };
