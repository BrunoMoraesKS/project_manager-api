import { Request, Response, Router } from 'express';
import {
  body,
  param,
  validationResult,
  ValidationError,
} from 'express-validator';

import { createTaskController } from '../modules/projects/useCases/task/create';
import { deleteTaskController } from '../modules/projects/useCases/task/delete';
import { updateTaskController } from '../modules/projects/useCases/task/update';

const tasksRoutes = Router();

const errorFormatter = ({ msg }: ValidationError) => {
  return msg;
};

tasksRoutes.post('/:id', (req: Request, res: Response) => {
  return createTaskController.handle(req, res);
});

tasksRoutes.delete('/:id', (req: Request, res: Response) => {
  return deleteTaskController.handle(req, res);
});

tasksRoutes.patch('/:id', (req: Request, res: Response) => {
  return updateTaskController.handle(req, res);
});

export { tasksRoutes };
