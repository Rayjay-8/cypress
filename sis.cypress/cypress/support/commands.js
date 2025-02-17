// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

const loginsis = {
    email: Cypress.env('username'),
    senha: Cypress.env('password')
}

// -- This is a parent command --
Cypress.Commands.add('loginOnSis', () => { 
    cy.visit('https://homo.dicomp.com.br/sis.dicomp.com.br/index.php/')

    cy.url().then((currentUrl) => {
        if (currentUrl.includes('/dashboard')) {
            cy.log('Usuário já está logado.')
            return
        }

        cy.get('#usuario').type(loginsis.email)
        cy.get('#senha').type(loginsis.senha)
        cy.get('button.botaoLogin').click()
        cy.url().should('contain', '/dashboard')
    })
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