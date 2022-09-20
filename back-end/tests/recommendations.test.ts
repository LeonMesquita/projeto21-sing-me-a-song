import supertest from "supertest";
import {prisma} from '../src/database';

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE recommendations`;
});


afterAll(async () => {
    await prisma.$disconnect();
})




describe('Test posts recommendations routes', () => {
    it.todo('Test creation route');

    it.todo('Test add vote route');

    it.todo('Test remove vote route');
});



describe('Test get recommendations routes', () => {
    it.todo('Test get the ten more recent recommendations');

    it.todo('Test get recommendation by id');

    it.todo('Test get a random recommendation');

    it.todo('Test list top recommendations');
});