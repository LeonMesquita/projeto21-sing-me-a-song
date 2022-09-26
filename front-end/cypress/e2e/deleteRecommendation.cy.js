
beforeEach(async () => {
    await cy.request('POST', 'http://localhost:5000/e2e/reset', {});
  })

describe('empty spec', () => {
  it('passes', () => {
    cy.createRecommendation();      

    cy.visit('http://localhost:3000');
    for(let i = 1; i <= 6; i++){
        cy.get('[data-test-id="downvote"]').click();
    }
    cy.get('.recommendations').should('have.length',0);
  })
})