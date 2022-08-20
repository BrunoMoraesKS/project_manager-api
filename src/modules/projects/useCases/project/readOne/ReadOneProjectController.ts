import { Request, Response } from 'express';
import { ReadOneProjectUseCase } from './ReadOneProjectUseCase';

class ReadOneProjectController {
  constructor(private readOneProjectUseCase: ReadOneProjectUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const project = await this.readOneProjectUseCase.execute({
        id,
      });

      return res.status(200).json(project);
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }
  }
}

export { ReadOneProjectController };
