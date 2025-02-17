import faker from 'faker-br'
import Leite from 'leite'

const leite = new Leite()

const cliente = {
  nome: "Teste_"+faker.name.findName(),
  // cnpj: '24.142.630/0001-69',
  cnpj: leite.empresa.cnpj({ formatado: false }),
  cep: "87053060",
  numero: 123,
  tel: faker.phone.phoneNumberFormat(),
  telzap: faker.phone.phoneNumberFormat(),
  email: faker.internet.email()
}

describe('Cadastro de um novo cliente na loja!', () => {
  
  it("Preenche o formulario - part 1", () => {
    
    cy.visit('/cadastro.dicomp.com.br/public/')
    cy.get('#link-novo-cliente').click()

    cy.get('#razao-social').type(cliente.nome)
    cy.get('#nome-fantasia').type(cliente.nome)
    cy.get('#cnpj').type(cliente.cnpj)
    cy.get('#cep').type(cliente.cep)
    cy.get('#botao-continuar').click()
  })

  it("Preenche o formulario - part 2", () => {
    cy.get('#numero').type(cliente.numero)
    // cy.get('#flag-inscricao-estadual-isenta').click()

    cy.get('#inscricao-estadual').type("0002324235235")
    cy.get('#nome-comprador').type(cliente.nome)
    cy.get('#telefone-comprador').type(cliente.tel)
    cy.get('#whatsapp-comprador').type(cliente.telzap)
    cy.get('#email-comprador').type(cliente.email)
    cy.get('#email-nfe').type(cliente.email)
    cy.get('#botao-continuar').click()
  })

  it("Preenche o formulario - part 3", () => {
    cy.get('#ramo-atividade').select('9')
    cy.get('#flag-como-coheceu-a-dicomp-15').click()
    cy.get('#botao-enviar').click()
  })

  // it('Finalizar cadastro', () => {
  //   cy.get('#botao-concluir-cadastro').click()
  //   console.log(cliente)
  // })
})
