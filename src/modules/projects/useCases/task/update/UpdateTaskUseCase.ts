import { IProjectsRepository } from '../../../repositories/IProjectsRepository';
import { AppError } from '../../../../../errors/AppError';
import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';

interface IRequest {
  id: string;
  name: string;
  user: string;
  shouldBeCompletedAt: Date;
}

class UpdateTaskUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}

  async execute({ id, name, user, shouldBeCompletedAt }: IRequest) {
    const prisma = ProjectsRepository.getPrismaInstance();

    const task = await prisma.task.findFirst({
      where: {
        id,
      },
    });

    if (!task) {
      throw new AppError('Project not found', 404);
    }

    if (name === '') {
      throw new AppError(`Invalid name`, 400);
    }
    if (user === '') {
      throw new AppError(`Invalid user`, 400);
    }
    if (shouldBeCompletedAt === null || shouldBeCompletedAt === undefined) {
      throw new AppError(`Invalid date`, 400);
    }

    this.projectsRepository.updateTask({ id, name, user, shouldBeCompletedAt });
  }
}

export { UpdateTaskUseCase };
