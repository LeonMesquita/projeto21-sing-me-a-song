beforeEach(async () => {
  await cy.request('POST', 'http://localhost:5000/e2e/reset', {});
})


describe('Test get recommendations', () => {
  it('The recommendations list must have 10 or less items', () => {
    cy.createRecommendation();      

    cy.visit('http://localhost:3000');

    cy.get('.recommendations').should('have.length.lessThan',11);
 
  })
})