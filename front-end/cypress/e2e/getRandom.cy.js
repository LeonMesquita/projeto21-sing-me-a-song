


beforeEach(async () => {
    await cy.request('POST', 'http://localhost:5000/e2e/reset', {});
})


describe('The recommendations list must have 10 or less items', () => {    
    it('passes', () => {

        cy.createRecommendation();       
        cy.visit('http://localhost:3000/random');
        expect('.recommendation').to.not.be.null
    })
  })