import {faker} from '@faker-js/faker';

beforeEach(async () => {
  await cy.request('POST', 'http://localhost:5000/e2e/reset', {});
})

describe('empty spec', () => {
  it('passes', () => {
    const youtubeLink = `https://www.youtube.com/${faker.random.alphaNumeric(10)}`
    const recommendation = {
        name: faker.lorem.words(10),
        youtubeLink
    }
    cy.visit('http://localhost:3000');
    cy.get('#name').type(recommendation.name);
    cy.get('#link').type(recommendation.youtubeLink);
    cy.get('[data-test-id="send"]').click();

    
  })
})