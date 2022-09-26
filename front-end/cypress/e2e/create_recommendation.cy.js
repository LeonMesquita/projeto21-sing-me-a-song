import {faker} from '@faker-js/faker';



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

    //cy.intercept("POST", "http://localhost/recommendations").as("createRecommendation");
    cy.get('[data-test-id="send"]').click();

    // expect(cy.xhr).to.equal(201);

   // cy.wait("@createRecommendation");

    
  })
})