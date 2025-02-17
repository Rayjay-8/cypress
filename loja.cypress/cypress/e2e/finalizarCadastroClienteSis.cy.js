





const dadosComplementares = {
    id: "44052",
    fundacao: "2003-01-01"
}

Cypress.config('defaultCommandTimeout', 10000);

describe('Finaliza Cadastro de um novo cliente no sis!', () => {

    // it("Faz login no sis", () => {
    //     cy.loginOnSis
    // })

    it("abra a pagina", () =>{
        cy.visit('https://homo.dicomp.com.br/sis.dicomp.com.br/index.php/consulta/cadastro_cliente_novo/fichaCadastro/editar/'+dadosComplementares.id)
        cy.contains('Formulário de Cadastro').should('exist');
    })

    it('preenche o formulario', () => {
        cy.contains('Data fundação', { timeout: 20000 }).should('exist')

        cy.get('#data_fundacao').type(dadosComplementares.fundacao)
        cy.get('#tipo_empresa').select('1')
        cy.get('#ramo_atividade').select('2000')
        cy.get('#consultor_venda').select('6924')

        cy.get('#tabela_maringa').select('0')
        cy.get('#tabela_itajai').select('27')
        cy.get('#tabela_contagem').select('34')

        cy.get('.btn-blueSis').click()
    })
})


