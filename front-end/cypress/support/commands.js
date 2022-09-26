// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import {faker} from '@faker-js/faker';



Cypress.Commands.add('createRecommendation', () => {

    const youtubeLink = `https://www.youtube.com/${faker.random.alphaNumeric(10)}`
    const recommendation = {
        name: faker.lorem.words(10),
        youtubeLink
    }
    cy.request('POST', 'http://localhost:5000/recommendations', recommendation);

})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })