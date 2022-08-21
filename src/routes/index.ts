import { Router } from 'express';
import { projectsRoutes } from './projects.routes';
import { tasksRoutes } from './tasks.routes';

const router = Router();

router.use('/projects', projectsRoutes);
router.use('/tasks', tasksRoutes);

router.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

export { router };
