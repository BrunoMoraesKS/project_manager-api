import { AppError } from '../../../../../errors/AppError';
import { ProjectsRepository } from '../../../repositories/implementations/ProjectsRepository';
import { IProjectsRepository } from '../../../repositories/IProjectsRepository';

interface IRequest {
  id: string;
  name: string;
  user: string;
  shouldBeCompletedAt: Date;
  status: string;
}

class CreateTaskUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}

  async execute({
    id,
    name,
    user,
    shouldBeCompletedAt: date,
    status,
  }: IRequest) {
    const prisma = ProjectsRepository.getPrismaInstance();
    const shouldBeCompletedAt = new Date(date);

    const project = await prisma.project.findFirst({
      where: {
        id,
      },
    });

    if (!project) {
      throw new AppError('Project not found', 404);
    }

    this.projectsRepository.createTask({
      id,
      name,
      user,
      shouldBeCompletedAt,
      status,
    });
  }
}

export { CreateTaskUseCase };
