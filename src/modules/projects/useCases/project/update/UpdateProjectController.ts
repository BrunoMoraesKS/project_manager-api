import { Request, Response } from 'express';
import { UpdateProjectUseCase } from './UpdateProjectUseCase';

class UpdateProjectController {
  constructor(private updateProjectUseCase: UpdateProjectUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const { id } = req.params;

    try {
      await this.updateProjectUseCase.execute({
        id,
        name,
      });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }

    return res
      .status(201)
      .send({ message: `Project '${name}' succesfully updated` });
  }
}

export { UpdateProjectController };
