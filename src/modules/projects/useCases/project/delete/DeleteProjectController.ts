import { Request, Response } from 'express';
import { DeleteProjectUseCase } from './DeleteProjectUseCase';

class DeleteProjectController {
  constructor(private deleteProjectUseCase: DeleteProjectUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.deleteProjectUseCase.execute({
        id,
      });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }

    return res
      .status(201)
      .send({ message: `Project '${id}' succesfully deleted` });
  }
}

export { DeleteProjectController };
