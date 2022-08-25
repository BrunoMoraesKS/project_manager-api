import { Router } from 'express';
import { projectsRoutes } from './projects.routes';
import { tasksRoutes } from './tasks.routes';

const router = Router();

router.use('/projects', projectsRoutes);
router.use('/tasks', tasksRoutes);

export { router };
