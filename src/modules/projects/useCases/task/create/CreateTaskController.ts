import { Request, Response } from 'express';
import { CreateTaskUseCase } from './CreateTaskUseCase';

class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, user, shouldBeCompletedAt } = req.body;
    const { id } = req.params;

    try {
      await this.createTaskUseCase.execute({
        id,
        name,
        user,
        shouldBeCompletedAt,
      });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }

    return res
      .status(201)
      .send({ message: `Task '${name}' successfully created` });
  }
}

export { CreateTaskController };
