import { IProjectsRepository } from '../../../repositories/IProjectsRepository';
import { PrismaClient } from '@prisma/client';
import { AppError } from '../../../../../errors/AppError';
import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';

interface IRequest {
  id: string;
}

class DeleteProjectUseCase {
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

    this.projectsRepository.delete({ id });
  }
}

export { DeleteProjectUseCase };
