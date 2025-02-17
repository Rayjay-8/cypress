/// <reference types="Cypress" />

import { URL_BASE_BACK } from "../constants/url";

console.log(">>>>>>>>>", URL_BASE_BACK)

describe('Testar cypress', () => {
  it('Testar se cypress está funcionando no solar.', () => {
    cy.visit("/");
  });
});

describe("Testes na tela de login", () => {
  let usuario = null;

  before(() => {
    // cy.asser
    cy.fixture('usuarioIntegradorLogin.json').then((usuarioLogin) => {
      usuario = usuarioLogin;
    });
  })


  it('Testar efetuar o login no solar com sucesso', () => {
    cy.visit("/");

    cy.get('#email').type(usuario.email);
    cy.get('#senha').type(usuario.senha);

    cy.contains('Login').click();

    cy.url({timeout: 60000}).should('include', '/escolhe_usuario');
  });

  it('Testar falhar ao efetuar o login no solar com senha inválida', () => {
    cy.visit("/");

    cy.get('#email').type(usuario.email);
    cy.get('#senha').type('987654321');

    cy.contains('Login').click();

    cy.url({timeout: 60000}).should('include', '/login');

    cy.request({
      method: 'POST',
      url: URL_BASE_BACK + "/login",
      body: {
        email: usuario.email,
        info: usuario.info,
        empresa_url: "",
        senha: '987654321',
      },
      failOnStatusCode: false,
    }).then((resp) => {
      cy.log(resp.body)
      
      expect(resp.status).to.eq(500)
    })
  });
})