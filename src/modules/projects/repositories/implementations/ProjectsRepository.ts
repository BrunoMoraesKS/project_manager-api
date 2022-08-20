import { AppError } from '../../../../errors/AppError';
import { IProjectsRepository, ICreateProjectDTO } from '../IProjectsRepository';
import { PrismaClient, Project } from '@prisma/client';

class ProjectsRepository {
  async create({ name }: ICreateProjectDTO): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.project.create({
      data: {
        name,
      },
    });
  }

  async read(): Promise<Project[]> {
    const prisma = new PrismaClient();

    const allProjects = await prisma.project.findMany();

    return allProjects;
  }
}

export { ProjectsRepository };
