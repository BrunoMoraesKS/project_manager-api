import { IProjectsRepository } from '../../../repositories/IProjectsRepository';
import { AppError } from '../../../../../errors/AppError';
import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';

interface IRequest {
  id: string;
}

class UncompleteTaskUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}

  async execute({ id }: IRequest) {
    const prisma = ProjectsRepository.getPrismaInstance();

    const task = await prisma.task.findFirst({
      where: {
        id,
      },
    });

    if (!task) {
      throw new AppError('Task not found', 404);
    }

    this.projectsRepository.uncompleteTask({
      id,
    });
  }
}

export { UncompleteTaskUseCase };
