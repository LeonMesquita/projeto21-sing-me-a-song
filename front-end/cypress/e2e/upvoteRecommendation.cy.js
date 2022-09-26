
beforeEach(async () => {
    await cy.request('POST', 'http://localhost:5000/e2e/reset', {});
  })

describe('Test remove vote', () => {
  it('Remove 1 vote from the recommendation', () => {
    cy.createRecommendation();      

    cy.visit('http://localhost:3000');

     cy.get('[data-test-id="upvote"]').click();

    cy.get('[data-test-id="score"]').should('have.text','1')

  })
})