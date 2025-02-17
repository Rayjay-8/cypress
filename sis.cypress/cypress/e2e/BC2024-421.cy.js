describe('template spec', () => {
  
  
  it('Editar um registro e voltar sem alterar nada', () => {
    cy.loginOnSis()

    cy.visit('https://homo.dicomp.com.br/sis.dicomp.com.br/index.php/consulta/cadastro_cliente_novo/lista')
    cy.get(':nth-child(1) > :nth-child(7) > .btn-primary').click()
    cy.get('.text-right > :nth-child(1)').click()
    cy.url().should('contain', '/cadastro_cliente_novo/lista')
  })
})