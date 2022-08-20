import { IProjectsRepository } from '../../../repositories/IProjectsRepository';

class ReadProjectsUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}

  async execute() {
    return this.projectsRepository.read();
  }
}

export { ReadProjectsUseCase };
