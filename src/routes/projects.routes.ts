import { Request, Response, Router } from 'express';
import {
  body,
  param,
  validationResult,
  ValidationError,
} from 'express-validator';
import { createProjectController } from '../modules/projects/useCases/project/create';
import { deleteProjectController } from '../modules/projects/useCases/project/delete';
import { deleteAllProjectsController } from '../modules/projects/useCases/project/deleteAll';
import { readProjectsController } from '../modules/projects/useCases/project/read';
import { readOneProjectController } from '../modules/projects/useCases/project/readOne';
import { readSoftdeletedProjectsController } from '../modules/projects/useCases/project/readSoftdelete';
import { restoreProjectsController } from '../modules/projects/useCases/project/restore';
import { restoreOneProjectController } from '../modules/projects/useCases/project/restoreOne';
import { softdeleteProjectController } from '../modules/projects/useCases/project/softdelete';
import { updateProjectController } from '../modules/projects/useCases/project/update';

const projectsRoutes = Router();

const errorFormatter = ({ msg }: ValidationError) => {
  return msg;
};

projectsRoutes.post(
  '/',
  body('name').not().isEmpty().withMessage('Name is required'),

  (req: Request, res: Response) => {
    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.mapped() });
    }

    return createProjectController.handle(req, res);
  }
);

projectsRoutes.get('/trashCan', (req: Request, res: Response) => {
  return readSoftdeletedProjectsController.handle(req, res);
});

projectsRoutes.delete('/trashCan', (req: Request, res: Response) => {
  return deleteAllProjectsController.handle(req, res);
});

projectsRoutes.get('/', (req: Request, res: Response) => {
  return readProjectsController.handle(req, res);
});

projectsRoutes.get('/:id', (req: Request, res: Response) => {
  return readOneProjectController.handle(req, res);
});

projectsRoutes.delete('/:id', (req: Request, res: Response) => {
  return deleteProjectController.handle(req, res);
});

projectsRoutes.patch('/softdelete/:id', (req: Request, res: Response) => {
  return softdeleteProjectController.handle(req, res);
});

projectsRoutes.patch('/restore', (req: Request, res: Response) => {
  return restoreProjectsController.handle(req, res);
});

projectsRoutes.patch('/restore/:id', (req: Request, res: Response) => {
  return restoreOneProjectController.handle(req, res);
});

projectsRoutes.patch(
  '/:id',
  param('id').not().isEmpty().withMessage('Id is required'),
  body('name').not().isEmpty().withMessage('Name is required'),
  (req: Request, res: Response) => {
    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.mapped() });
    }

    return updateProjectController.handle(req, res);
  }
);

export { projectsRoutes };
