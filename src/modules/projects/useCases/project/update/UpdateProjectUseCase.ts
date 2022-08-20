import { IProjectsRepository } from '../../../repositories/IProjectsRepository';
import { PrismaClient } from '@prisma/client';
import { AppError } from '../../../../../errors/AppError';
import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';

interface IRequest {
  id: string;
  name: string;
}

class UpdateProjectUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}

  async execute({ id, name }: IRequest) {
    const prisma = ProjectsRepository.getPrismaInstance();

    const project = await prisma.project.findFirst({
      where: {
        id,
      },
    });

    if (!project) {
      throw new AppError('Project not found', 404);
    }

    if (project.name === name) {
      throw new AppError(`The name of the project is already ${name}`, 400);
    }

    if (name === '') {
      throw new AppError(`Invalid name`, 400);
    }

    this.projectsRepository.update({ id, name });
  }
}

export { UpdateProjectUseCase };
