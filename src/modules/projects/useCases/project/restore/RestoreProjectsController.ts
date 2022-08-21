import { Request, Response } from 'express';
import { RestoreProjectsUseCase } from './RestoreProjectsUseCase';

class RestoreProjectsController {
  constructor(private restoreProjectUseCase: RestoreProjectsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.restoreProjectUseCase.execute();
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }

    return res
      .status(201)
      .send({ message: `All projects were successfully restored` });
  }
}

export { RestoreProjectsController };
