import { Request, Response } from 'express';
import { DeleteAllProjectsUseCase } from './DeleteAllProjectsUseCase';

class DeleteAllProjectsController {
  constructor(private deleteAllProjectssUseCase: DeleteAllProjectsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.deleteAllProjectssUseCase.execute();
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }

    return res.status(200).send({ message: `Projects successfully deleted` });
  }
}

export { DeleteAllProjectsController };
