import { Request, Response } from 'express';
import { RestoreOneProjectUseCase } from './RestoreOneProjectUseCase';

class RestoreOneProjectController {
  constructor(private restoreOneProjectUseCase: RestoreOneProjectUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.restoreOneProjectUseCase.execute({
        id,
      });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        message: err.message,
      });
    }

    return res
      .status(200)
      .send({ message: `Project '${id}' successfully restored` });
  }
}

export { RestoreOneProjectController };
