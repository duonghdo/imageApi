import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('App', () => {
    it('endpoint / should return 200', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    });

    it('endpoint /api/images missing parameters should return 400', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(400);
    });

    it('endpoint /api/images request non exist file should return 404', async () => {
        const response = await request.get(
            '/api/images?filename=foo&width=100&height=100'
        );
        expect(response.status).toBe(404);
    });

    it('endpoint /api/images invalid parameters should return 400', async () => {
        const response = await request.get(
            '/api/images?filename=fjord&width=-100&height=100'
        );
        expect(response.status).toBe(400);
    });

    it('endpoint /api/images should return 200', async () => {
        const response = await request.get(
            '/api/images?filename=fjord&width=100&height=100'
        );
        expect(response.status).toBe(200);
    });
});
