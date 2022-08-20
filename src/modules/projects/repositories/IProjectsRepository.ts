import { Project } from '@prisma/client';

interface ICreateProjectDTO {
  name: string;
}

interface IProjectsRepository {
  create({ name }: ICreateProjectDTO): Promise<void>;
  read(): Promise<Project[]>;
}

export { IProjectsRepository, ICreateProjectDTO };
