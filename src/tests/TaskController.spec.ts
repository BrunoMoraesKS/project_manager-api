/**
 * @jest-environment ./prisma/prismaEnvironmentJest
 */

import { agent as request } from 'supertest';
import { app } from '../server';

describe('Project integration tests', () => {
  it('should be able to create a task', async () => {
    await request(app)
      .post('/projects')
      .send({
        name: 'Test Project',
      })
      .expect(201);

    const projects = await request(app).get('/projects').send();
    const project = projects.body[0];

    await request(app)
      .post(`/tasks/${project.id}`)
      .send({
        name: 'Test Task',
        user: 'Tester',
        shouldBeCompletedAt: '01/01/2022',
      })
      .expect(201);
  });
  it('should not be able to create a task', async () => {
    await request(app)
      .post(`/tasks/notexistingproject`)
      .send({
        name: 'Test Task',
        user: 'Tester',
        shouldBeCompletedAt: '01/01/2022',
      })
      .expect(404);
  });

  it('should be able to update a task', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const projects = await request(app).get('/projects').send();
    const project = projects.body[0];
    const task = project.tasks[0];

    await request(app)
      .patch(`/tasks/${task.id}`)
      .send({
        name: 'Updated Test Task',
        user: 'Tester',
        shouldBeCompletedAt: '01/01/2022',
      })
      .expect(200);
  });

  it('should not be able to update a task', async () => {
    const projects = await request(app).get('/projects').send();
    const project = projects.body[0];
    const task = project.tasks[0];

    await request(app)
      .patch(`/tasks/notexistingtask`)
      .send({
        name: 'Updated Test Task',
        user: 'Tester',
        shouldBeCompletedAt: '01/01/2022',
      })
      .expect(404);

    await request(app)
      .patch(`/tasks/${task.id}`)
      .send({
        name: 'Task with no user',
        user: '',
        shouldBeCompletedAt: '01/01/2022',
      })
      .expect(400);
  });

  it('should be able to complete and uncomplete a task', async () => {
    const projects = await request(app).get('/projects').send();
    const project = projects.body[0];
    const task = project.tasks[0];

    await request(app).patch(`/tasks/complete/${task.id}`).send().expect(200);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    await request(app).patch(`/tasks/uncomplete/${task.id}`).send().expect(200);
  });

  it('should not be able to complete and uncomplete a task', async () => {
    await request(app)
      .patch(`/tasks/complete/notexistingtask`)
      .send()
      .expect(404);

    await request(app)
      .patch(`/tasks/uncomplete/notexistingtask`)
      .send()
      .expect(404);
  });

  it('should be able to delete a task', async () => {
    const projects = await request(app).get('/projects').send();
    const project = projects.body[0];
    const task = project.tasks[0];

    await request(app).delete(`/tasks/${task.id}`).send().expect(200);
  });

  it('should be able to delete a task', async () => {
    const projects = await request(app).get('/projects').send();
    const project = projects.body[0];

    await request(app).delete(`/tasks/notexistingtask`).send().expect(404);

    await request(app).delete(`/projects/${project.id}`).send().expect(200);
  });
});
