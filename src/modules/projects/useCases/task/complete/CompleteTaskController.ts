import { Request, Response } from 'express';
import { CompleteTaskUseCase } from './CompleteTaskUseCase';

class CompleteTaskController {
  constructor(private completeTaskUseCase: CompleteTaskUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.completeTaskUseCase.execute({
        id,
      });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }

    return res
      .status(200)
      .send({ message: `Task '${id}' successfully completed` });
  }
}

export { CompleteTaskController };
