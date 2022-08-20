import { AppError } from '../../../../errors/AppError';
import {
  ICreateProjectDTO,
  IDeleteProjectDTO,
  IReadOneProjectDTO,
  IRestoreProjectDTO,
  ISoftdeleteProjectDTO,
  IUpdateProjectDTO,
} from '../IProjectsRepository';
import { prisma, PrismaClient, Project } from '@prisma/client';

class ProjectsRepository {
  private prisma = new PrismaClient();

  private static PRISMA_INSTANCE: PrismaClient;
  public static getPrismaInstance(): PrismaClient {
    if (!ProjectsRepository.PRISMA_INSTANCE) {
      ProjectsRepository.PRISMA_INSTANCE = new PrismaClient();
    }

    return ProjectsRepository.PRISMA_INSTANCE;
  }

  async create({ name }: ICreateProjectDTO): Promise<void> {
    await this.prisma.project.create({
      data: {
        name,
      },
    });
  }

  async read(): Promise<Project[]> {
    const allProjects = await this.prisma.project.findMany({
      where: {
        isActive: true,
      },
    });

    return allProjects;
  }

  async readOne({ id }: IReadOneProjectDTO): Promise<Project> {
    const project = await this.prisma.project.findFirst({
      where: {
        id,
      },
    });

    return project!;
  }

  async readSoftdeleted(): Promise<Project[]> {
    const allSoftdeletedProjects = await this.prisma.project.findMany({
      where: {
        isActive: false,
      },
    });

    return allSoftdeletedProjects;
  }

  async update({ id, name }: IUpdateProjectDTO): Promise<void> {
    await this.prisma.project.update({
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
    await this.prisma.project.delete({
      where: {
        id,
      },
    });
  }

  async softdelete({ id }: ISoftdeleteProjectDTO): Promise<void> {
    await this.prisma.project.update({
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
    await this.prisma.project.updateMany({
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
    await this.prisma.project.update({
      where: {
        id,
      },
      data: {
        isActive: true,
        updatedAt: new Date(),
      },
    });
  }
}

export { ProjectsRepository };
