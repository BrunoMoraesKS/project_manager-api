import { Router } from 'express';
import { projectsRoutes } from './projects.routes';

const router = Router();

router.use('/projects', projectsRoutes);
router.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

export { router };
