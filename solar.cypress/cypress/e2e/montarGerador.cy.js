/// <reference types="Cypress" />

import { LOGAR } from "../services/login";
import { REMOVER_ITEM_LISTA } from "../helpers/manipuladorListas";

const QUINZE_SEGUNDOS = 15000;
const VINCE_CINCO_SEGUNDOS = 25000;

describe('Testar tela de montagem de gerador', () => {
  before(() => {    
    LOGAR();

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    });

  });

  it('Testar a montagem de um gerador', () => {
    let listaProdutos = [];

    cy.visit('/montar_gerador');

    //Dados do cliente
    cy.get('#nome').type("Cliente teste 1");
    cy.get('#email').type("cliente1@teste.com.br");
    cy.get('#tel').type("44988776655");
    cy.get('#fase').select("bi");
    cy.get('#medicao').select("consumo");
    cy.get('#kw').type("10000");
    cy.get('#regiao').select("nordeste");
    cy.wait(QUINZE_SEGUNDOS);
    cy.contains('Avançar').click();
    
    //Painel
    cy.url({timeout: QUINZE_SEGUNDOS}).should('include', '/montar_gerador/painel_solar');
    cy.get("#produto0filial0").check();
    cy.get(".cod-prod:first").then($el => {
      listaProdutos.push($el.text().replace("Cod:", "").trim());
    });
    cy.get(".btn-incluir:first").click();
    cy.get(".btn-action-ok").click();
    cy.get("a.tecnology:first").click();

    //Microinversor
    cy.url({timeout: QUINZE_SEGUNDOS}).should('include', '/montar_gerador/microinversor');
    cy.get(".btn-incluir:first").click();
    cy.get(".cod-prod:first").then($el => {
      listaProdutos.push($el.text().replace("Cod:", "").trim());
    });
    cy.get(".btn-action-ok").click();
    cy.get(".btn-avancar-azul").click();
    
    //Comunicador    
    cy.url({timeout: QUINZE_SEGUNDOS}).should('include', '/montar_gerador/comunicador');
    cy.get(".btn-incluir:first").click();
    cy.get(".cod-prod:first").then($el => {
      listaProdutos.push($el.text().replace("Cod:", "").trim());
    });
    cy.get(".btn-action-ok").click();
    cy.get(".btn-avancar-azul").click();

    //Estrutura
    cy.url({timeout: QUINZE_SEGUNDOS}).should('include', '/montar_gerador/estrutura_fixacao');
    cy.get(".btn-incluir:first").click();
    cy.get(".cod-prod:first").then($el => {
      listaProdutos.push($el.text().replace("Cod:", "").trim());
    });
    cy.get(".btn-action-ok").click();
    cy.contains('Avançar').click();
    cy.get("#avancaModal .btn-cancel").click();

    //Resumo
    cy.wait(VINCE_CINCO_SEGUNDOS);
    cy.url().should('match', /https:\/\/homo.dicomp.com.br/solar.piersystem.com.br\/orcamentos\/editar\/(\d*)/);
    cy.get(".titulo-lista ~ div").each($el => {      
      let codigo = $el.text().split("-")[0].trim();

      listaProdutos = REMOVER_ITEM_LISTA(listaProdutos, codigo);
    }).then(() => {
      expect(listaProdutos.length).to.eq(0);
    });

  });
});