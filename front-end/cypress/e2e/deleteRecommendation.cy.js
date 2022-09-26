
beforeEach(async () => {
    await cy.request('POST', 'http://localhost:5000/e2e/reset', {});
  })

describe('Test delete recommendation', () => {
  it('Delete a recommendation if the score is under -5', () => {
    cy.createRecommendation();      

    cy.visit('http://localhost:3000');
    for(let i = 1; i <= 6; i++){
        cy.get('[data-test-id="downvote"]').click();
    }
    cy.get('.recommendations').should('have.length',0);
  })
})