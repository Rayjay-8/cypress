import '@testing-library/cypress/add-commands'
import 'cypress-wait-until';

const loginsis = {
    email: Cypress.env('username'),
    senha: Cypress.env('password')
}

// -- This is a parent command --
Cypress.Commands.add('loginOnSis', () => {
    // if(cy.url())
    console.log(cy.url())
    cy.visit('https://homo.dicomp.com.br/sis.dicomp.com.br/index.php/')
    cy.get('#usuario').type(loginsis.email)
    cy.get('#senha').type(loginsis.senha)
    cy.get('button.botaoLogin').click()
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