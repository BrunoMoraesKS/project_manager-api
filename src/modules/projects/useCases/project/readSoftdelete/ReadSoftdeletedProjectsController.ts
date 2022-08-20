import { Request, Response } from 'express';
import { ReadSoftdeletedProjectsUseCase } from './ReadSoftdeletedProjectsUseCase';

class ReadSoftdeletedProjectsController {
  constructor(
    private readSoftdeletedProjectsUseCase: ReadSoftdeletedProjectsUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const allSoftdeletedProjects =
        await this.readSoftdeletedProjectsUseCase.execute();

      return res.status(200).json(allSoftdeletedProjects);
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }
  }
}

export { ReadSoftdeletedProjectsController };
