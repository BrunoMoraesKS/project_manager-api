import { Request, Response, Router } from 'express';
import {
  body,
  param,
  validationResult,
  ValidationError,
} from 'express-validator';
import { createProjectController } from '../modules/projects/useCases/project/create';
import { readProjectsController } from '../modules/projects/useCases/project/read';

const projectsRoutes = Router();

const errorFormatter = ({ msg }: ValidationError) => {
  return msg;
};

projectsRoutes.post(
  '/',
  body('name').not().isEmpty().withMessage('Nome é obrigatório'),

  (req: Request, res: Response) => {
    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.mapped() });
    }

    return createProjectController.handle(req, res);
  }
);

projectsRoutes.get('/', (req: Request, res: Response) => {
  return readProjectsController.handle(req, res);
});

export { projectsRoutes };
