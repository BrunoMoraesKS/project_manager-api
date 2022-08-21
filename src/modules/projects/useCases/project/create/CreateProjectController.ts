import { Request, Response } from 'express';
import { CreateProjectUseCase } from './CreateProjectUseCase';

class CreateProjectController {
  constructor(private createProjectUseCase: CreateProjectUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    try {
      await this.createProjectUseCase.execute({
        name,
      });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }

    return res
      .status(201)
      .send({ message: `Project '${name}' successfully created` });
  }
}

export { CreateProjectController };
