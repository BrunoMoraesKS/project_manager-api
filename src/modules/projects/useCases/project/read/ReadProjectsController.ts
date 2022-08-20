import { Request, Response } from 'express';
import { ReadProjectsUseCase } from './ReadProjectsUseCase';

class ReadProjectsController {
  constructor(private readProjectsUseCase: ReadProjectsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const allProjects = await this.readProjectsUseCase.execute();

      return res.status(200).json(allProjects);
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }
  }
}

export { ReadProjectsController };
