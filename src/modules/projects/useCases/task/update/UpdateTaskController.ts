import { Request, Response } from 'express';
import { UpdateTaskUseCase } from './UpdateTaskUseCase';

class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, user, shouldBeCompletedAt: date } = req.body;
    const { id } = req.params;
    const shouldBeCompletedAt = new Date(date);

    try {
      await this.updateTaskUseCase.execute({
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
      .send({ message: `Task '${name}' successfully updated` });
  }
}

export { UpdateTaskController };
