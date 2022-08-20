import { IProjectsRepository } from '../../../repositories/IProjectsRepository';

class ReadSoftdeletedProjectsUseCase {
  constructor(private projectsRepository: IProjectsRepository) {}

  async execute() {
    return this.projectsRepository.readSoftdeleted();
  }
}

export { ReadSoftdeletedProjectsUseCase };
