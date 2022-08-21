import {
  ICreateProjectDTO,
  ICreateTaskDTO,
  IDeleteProjectDTO,
  IReadOneProjectDTO,
  IRestoreProjectDTO,
  ISoftdeleteProjectDTO,
  IUpdateProjectDTO,
  IUpdateTaskDTO,
  IDeleteTaskDTO,
} from '../IProjectsRepository';
import { PrismaClient, Project } from '@prisma/client';

class ProjectsRepository {
  private static prisma = new PrismaClient();

  public static getPrismaInstance(): PrismaClient {
    return ProjectsRepository.prisma;
  }

  async create({ name }: ICreateProjectDTO): Promise<void> {
    await ProjectsRepository.prisma.project.create({
      data: {
        name,
      },
    });
  }

  async read(): Promise<Project[]> {
    const allProjects = await ProjectsRepository.prisma.project.findMany({
      where: {
        isActive: true,
      },
      include: {
        tasks: true,
      },
    });

    return allProjects;
  }

  async readOne({ id }: IReadOneProjectDTO): Promise<Project> {
    const project = await ProjectsRepository.prisma.project.findFirst({
      where: {
        id,
      },
      include: {
        tasks: true,
      },
    });

    return project!;
  }

  async readSoftdeleted(): Promise<Project[]> {
    const allSoftdeletedProjects =
      await ProjectsRepository.prisma.project.findMany({
        where: {
          isActive: false,
        },
        include: {
          tasks: true,
        },
      });

    return allSoftdeletedProjects;
  }

  async update({ id, name }: IUpdateProjectDTO): Promise<void> {
    await ProjectsRepository.prisma.project.update({
      where: {
        id,
      },
      data: {
        name,
        updatedAt: new Date(),
      },
    });
  }

  async delete({ id }: IDeleteProjectDTO): Promise<void> {
    await ProjectsRepository.prisma.project.delete({
      where: {
        id,
      },
    });

    await ProjectsRepository.prisma.task.deleteMany({
      where: {
        projectId: id,
      },
    });
  }

  async softdelete({ id }: ISoftdeleteProjectDTO): Promise<void> {
    await ProjectsRepository.prisma.project.update({
      where: {
        id,
      },
      data: {
        isActive: false,
        updatedAt: new Date(),
      },
    });
  }

  async restore(): Promise<void> {
    await ProjectsRepository.prisma.project.updateMany({
      where: {
        isActive: false,
      },
      data: {
        isActive: true,
        updatedAt: new Date(),
      },
    });
  }

  async restoreOne({ id }: IRestoreProjectDTO): Promise<void> {
    await ProjectsRepository.prisma.project.update({
      where: {
        id,
      },
      data: {
        isActive: true,
        updatedAt: new Date(),
      },
    });
  }

  async createTask({
    id,
    name,
    user,
    shouldBeCompletedAt,
  }: ICreateTaskDTO): Promise<void> {
    await ProjectsRepository.prisma.project.update({
      where: {
        id,
      },
      data: {
        tasks: {
          create: {
            name,
            user,
            shouldBeCompletedAt,
          },
        },
      },
    });
  }

  async updateTask({
    id,
    name,
    user,
    shouldBeCompletedAt,
  }: IUpdateTaskDTO): Promise<void> {
    const task = await ProjectsRepository.prisma.task.findFirst({
      where: {
        id,
      },
    });

    await ProjectsRepository.prisma.task.update({
      where: {
        id,
      },
      data: {
        name,
        user,
        shouldBeCompletedAt,
        updatedAt: new Date(),
      },
    });
  }

  async deleteTask({ id }: IDeleteTaskDTO): Promise<void> {
    await ProjectsRepository.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}

export { ProjectsRepository };
