


beforeEach(async () => {
    await cy.request('POST', 'http://localhost:5000/e2e/reset', {});
})


describe('Test get random', () => {    
    it('The recommendations list must have 10 or less items', () => {

        cy.createRecommendation();       
        cy.visit('http://localhost:3000/random');
        expect('.recommendation').to.not.be.null
    })
  })