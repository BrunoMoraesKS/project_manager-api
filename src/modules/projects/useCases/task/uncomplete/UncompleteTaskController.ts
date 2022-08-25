import { Request, Response } from 'express';
import { UncompleteTaskUseCase } from './UncompleteTaskUseCase';

class UncompleteTaskController {
  constructor(private uncompleteTaskUseCase: UncompleteTaskUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.uncompleteTaskUseCase.execute({
        id,
      });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }

    return res
      .status(200)
      .send({ message: `Task '${id}' successfully uncompleted` });
  }
}

export { UncompleteTaskController };
