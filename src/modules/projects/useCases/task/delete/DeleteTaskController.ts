import { Request, Response } from 'express';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';

class DeleteTaskController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.deleteTaskUseCase.execute({
        id,
      });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }

    return res
      .status(201)
      .send({ message: `Task '${id}' successfully deleted` });
  }
}

export { DeleteTaskController };
