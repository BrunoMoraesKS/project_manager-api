/**
 * @jest-environment ./prisma/prismaEnvironmentJest
 */

import { agent as request } from 'supertest';
import { app } from '../server';

describe('Project integration tests', () => {
  it('should be able to create a project', async () => {
    await request(app)
      .post('/projects')
      .send({
        name: 'Test Project',
      })
      .expect(201);
  });

  it('should be able to read a single and all projects', async () => {
    const allProjects = await request(app).get('/projects').send();

    const testProject = allProjects.body[0];

    await request(app).get(`/projects/${testProject.id}`).send().expect(200);
  });

  it('should not be able to read a single project', async () => {
    await request(app).get(`/projects/notexistingproject`).send().expect(404);
  });

  it('should be able to update a project', async () => {
    const allProjects = await request(app).get('/projects').send();
    const testProject = allProjects.body[0];

    await request(app)
      .patch(`/projects/${testProject.id}`)
      .send({
        name: 'Updated Test Project',
      })
      .expect(200);
  });

  it('should not be able to update a project', async () => {
    const allProjects = await request(app).get('/projects').send();
    const testProject = allProjects.body[0];

    await request(app)
      .patch(`/projects/${testProject.id}`)
      .send({
        name: '',
      })
      .expect(400);

    await request(app)
      .patch(`/projects/notexistingproject`)
      .send({
        name: 'Updated Test Project',
      })
      .expect(404);
  });

  it('should be able to softdelete a project', async () => {
    const allProjects = await request(app).get('/projects').send();

    console.log(allProjects.body);

    const testProject = allProjects.body[0];

    await request(app)
      .patch(`/projects/softdelete/${testProject.id}`)
      .send()
      .expect(200);
  });

  it('should not be able to softdelete a project', async () => {
    await request(app)
      .patch(`/projects/softdelete/notexistingproject`)
      .send()
      .expect(404);
  });

  it('should be able to get and restore a project', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const allProjects = await request(app).get('/projects/trashCan').send();

    const testProject = allProjects.body[0];

    await request(app)
      .patch(`/projects/restore/${testProject.id}`)
      .send()
      .expect(200);
  });

  it('should not be able to restore a project', async () => {
    await request(app)
      .patch(`/projects/restore/notexistingproject`)
      .send()
      .expect(404);
  });

  it('should be able to delete a project', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const allProjects = await request(app).get('/projects').send();

    const testProject = allProjects.body[0];

    await request(app).delete(`/projects/${testProject.id}`).send().expect(200);
  });

  it('should not be able to delete a project', async () => {
    await request(app)
      .delete(`/projects/notexistingproject`)
      .send()
      .expect(404);
  });
});
