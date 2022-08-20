import { PrismaClient, Project } from '@prisma/client';

interface ICreateProjectDTO {
  name: string;
}
interface IReadOneProjectDTO {
  id: string;
}

interface IUpdateProjectDTO {
  id: string;
  name: string;
}

interface IDeleteProjectDTO {
  id: string;
}

interface ISoftdeleteProjectDTO {
  id: string;
}

interface IRestoreProjectDTO {
  id: string;
}
interface IProjectsRepository {
  create({ name }: ICreateProjectDTO): Promise<void>;
  read(): Promise<Project[]>;
  readOne({ id }: IReadOneProjectDTO): Promise<Project>;
  readSoftdeleted(): Promise<Project[]>;
  update({ id, name }: IUpdateProjectDTO): Promise<void>;
  delete({ id }: IDeleteProjectDTO): Promise<void>;
  softdelete({ id }: ISoftdeleteProjectDTO): Promise<void>;
  restore(): Promise<void>;
  restoreOne({ id }: IRestoreProjectDTO): Promise<void>;
}

export {
  IProjectsRepository,
  ICreateProjectDTO,
  IReadOneProjectDTO,
  IUpdateProjectDTO,
  IDeleteProjectDTO,
  ISoftdeleteProjectDTO,
  IRestoreProjectDTO,
};
