import { Request, Response } from 'express';
import { SoftdeleteProjectUseCase } from './SoftdeleteProjectUseCase';

class SoftdeleteProjectController {
  constructor(private softdeleteProjectUseCase: SoftdeleteProjectUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.softdeleteProjectUseCase.execute({
        id,
      });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }

    return res
      .status(200)
      .send({ message: `Project '${id}' moved to the trash can` });
  }
}

export { SoftdeleteProjectController };
