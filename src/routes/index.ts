import { Router } from 'express';
import { projectsRoutes } from './projects.routes';

const router = Router();

router.use('/projects', projectsRoutes);

export { router };
