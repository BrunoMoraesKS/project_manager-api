import { IProjectsRepository } from '../../../repositories/IProjectsRepository';

interface IRequest {
  name: string;
}

class CreateProjectUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}

  async execute({ name }: IRequest) {
    this.projectsRepository.create({ name });
  }
}

export { CreateProjectUseCase };
