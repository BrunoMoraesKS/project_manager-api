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

interface ICreateTaskDTO {
  id: string;
  name: string;
  user: string;
  shouldBeCompletedAt: Date;
}
interface IUpdateTaskDTO {
  id: string;
  name: string;
  user: string;
  shouldBeCompletedAt: Date;
}
interface IDeleteTaskDTO {
  id: string;
}
interface ICompleteTaskDTO {
  id: string;
}
interface IUncompleteTaskDTO {
  id: string;
}

interface IProjectsRepository {
  create({ name }: ICreateProjectDTO): Promise<void>;
  read(): Promise<Project[]>;
  readOne({ id }: IReadOneProjectDTO): Promise<Project>;
  readSoftdeleted(): Promise<Project[]>;
  update({ id, name }: IUpdateProjectDTO): Promise<void>;
  delete({ id }: IDeleteProjectDTO): Promise<void>;
  deleteAll(): Promise<void>;
  softdelete({ id }: ISoftdeleteProjectDTO): Promise<void>;
  restore(): Promise<void>;
  restoreOne({ id }: IRestoreProjectDTO): Promise<void>;

  createTask({
    id,
    name,
    user,
    shouldBeCompletedAt,
  }: ICreateTaskDTO): Promise<void>;
  updateTask({
    id,
    name,
    user,
    shouldBeCompletedAt,
  }: IUpdateTaskDTO): Promise<void>;
  deleteTask({ id }: IDeleteTaskDTO): Promise<void>;
  completeTask({ id }: ICompleteTaskDTO): Promise<void>;
  uncompleteTask({ id }: IUncompleteTaskDTO): Promise<void>;
}

export {
  IProjectsRepository,
  ICreateProjectDTO,
  IReadOneProjectDTO,
  IUpdateProjectDTO,
  IDeleteProjectDTO,
  ISoftdeleteProjectDTO,
  IRestoreProjectDTO,
  ICreateTaskDTO,
  IUpdateTaskDTO,
  IDeleteTaskDTO,
  ICompleteTaskDTO,
  IUncompleteTaskDTO,
};
