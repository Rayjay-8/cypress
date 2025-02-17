import faker from 'faker-br'

const cliente = {
  nome: "Teste_"+faker.name.findName(),
  cnpj: '79687588000587',
  cep: "87053060",
  numero: 123,
  tel: faker.phone.phoneNumberFormat(),
  telzap: faker.phone.phoneNumberFormat(),
  email: faker.internet.email()
}

describe('Cadastro de um novo cliente na loja!', () => {
  it("Tenta ir para o próximo sem preencher o formulario", () => {
    cy.visit('/cadastro.dicomp.com.br/public/')
    cy.get('#link-novo-cliente').click()
    cy.get('#botao-continuar').click()
    cy.contains('O campo é obrigatório.').should('exist');
  })
  
  it("Preenche o formulario com um cnpj que já existe", () => {
    cy.get('#razao-social').type(cliente.nome)
    cy.get('#nome-fantasia').type(cliente.nome)
    cy.get('#cnpj').type(cliente.cnpj)
    cy.get('#cep').type(cliente.cep)
    cy.contains('o cliente já se encontra').should('exist');
  })

  it("Não deve permitir continuar até mudar o cnpj", () => {
    cy.wait(2000)
    cy.get('.modal-footer > .btn').click()
    cy.get('#botao-continuar').click()
    cy.contains('o cliente já se encontra').should('exist');
  })

  it("validações extras", () => {
    cy.contains('Cliente já cadastrado.').should('exist')
  })

})
