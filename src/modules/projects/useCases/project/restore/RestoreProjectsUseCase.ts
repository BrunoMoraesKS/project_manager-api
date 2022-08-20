import { IProjectsRepository } from '../../../repositories/IProjectsRepository';

class RestoreProjectsUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}

  async execute() {
    this.projectsRepository.restore();
  }
}

export { RestoreProjectsUseCase };
