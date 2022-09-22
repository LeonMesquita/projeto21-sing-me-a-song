import supertest from "supertest";
import prisma from '../../src/database';
import {recommendationFactory} from '../factories/recommendationFactory';
import app from '../../src/app';


beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE recommendations`;
});


afterAll(async () => {
    await prisma.$disconnect();
})




describe('Test posts recommendations routes', () => {
    it('Must return status 201 if creation was succeeded', async () => {
        const recommendation = await recommendationFactory();
        const response = await supertest(app).post('/recommendations').send(recommendation);
        expect(response.status).toBe(201);
    });

    it('Must return status 409 if the recommendation name already exists', async () => {
        const recommendation = await recommendationFactory();
        await supertest(app).post('/recommendations').send(recommendation);
        const response = await supertest(app).post('/recommendations').send(recommendation);
        expect(response.status).toBe(409);
    });



    it('Must return status 200 if the upvote is correct', async () => {
        const recommendation = await recommendationFactory();
        const result = await supertest(app).post('/recommendations').send(recommendation);
        const response = await supertest(app).post(`/recommendations/${result.body.id}/upvote`);
        expect(response.status).toBe(200);
    });


    it('Must return status 200 if the downvote is correct', async () => {
        const recommendation = await recommendationFactory();
        const result = await supertest(app).post('/recommendations').send(recommendation);
        const response = await supertest(app).post(`/recommendations/${result.body.id}/downvote`);
        expect(response.status).toBe(200);
    });

    it('Must return status 404 if the recommendation was not found', async () => {
        const response = await supertest(app).post(`/recommendations/${1}/downvote`);
        expect(response.status).toBe(404);
    });

});



describe('Test get recommendations routes', () => {
    it('Must return status 200 if returned the last 10 recommendations', async () => {
        for(let cont = 1; cont <= 10; cont++){
            const recommendation = await recommendationFactory();
            await supertest(app).post('/recommendations').send(recommendation);
        };
        const response = await supertest(app).get('/recommendations');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBe(10);
    });



    it('Must return status 200 if the recommendation was returned correctly', async () => {
        const recommendation = await recommendationFactory();
        const result = await supertest(app).post('/recommendations').send(recommendation);
        const response = await supertest(app).get(`/recommendations/${result.body.id}`);
        expect(response.status).toBe(200);
        expect(response.status).not.toBeFalsy();
    });



    it('Must return status 404 if the recommendation was not found', async () => {
        const response = await supertest(app).get(`/recommendations/${1}`);
        expect(response.status).toBe(404);
    });


    it('Must return status 200 if a random recommendation was returned', async () => {
        const recommendation = await recommendationFactory();
        await supertest(app).post('/recommendations').send(recommendation);     
        const response = await supertest(app).get(`/recommendations/random`);
        expect(response.status).toBe(200);
        expect(response.status).not.toBeFalsy();
    });


    it('Must return status 200 if the top score recommendations was returned correctly', async () => {
        const recommendation = await recommendationFactory();
        await supertest(app).post('/recommendations').send(recommendation);     
        const response = await supertest(app).get(`/recommendations/top/${1}`);
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});