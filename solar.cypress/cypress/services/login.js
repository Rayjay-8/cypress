import { URL_BASE_BACK } from "../constants/url";

const DEZ_SEGUNDOS = 10000;

const LOGAR_ADMIN_BACK = () => {
    let usuario = null;

    cy.fixture('usuarioAdminLogin.json').then((usuarioLogin) => {
        usuario = usuarioLogin;
    });

    cy.clearCookie('ci_session_smartsolar');
    window.localStorage.removeItem('authToken');

    cy.session("sessionUsuario", () => {
        cy.request({
            method: 'POST',
            url: URL_BASE_BACK + "/login",
            headers: { "fuso-horario-local": "America/Sao_Paulo"},
            body: usuario,
            failOnStatusCode: false,
          }).then( ( { body } ) => {
            window.localStorage.setItem('authToken', body.key.token);    
        });
    });
}

const LOGAR_ADMIN = () => {
    let usuario = null;

    cy.fixture('usuarioAdminLogin.json').then((usuarioLogin) => {
        usuario = usuarioLogin;
    });

    cy.clearCookie('ci_session_smartsolar');  

    cy.session("sessionUsuario", () => {
        cy.visit("/");

        cy.get('#email').type(usuario.email);
        cy.get('#senha').type(usuario.senha);

        cy.contains('Login').click();

        cy.url({timeout: DEZ_SEGUNDOS}).should('include', '/dashboard');
    });
}

const LOGAR_BACK = () => {
    let usuario = null;

    cy.fixture('usuarioIntegradorLogin.json').then((usuarioLogin) => {
        usuario = usuarioLogin;
    });

    cy.clearCookie('ci_session_smartsolar');
    window.localStorage.removeItem('authToken');

    cy.session("sessionUsuario", () => {
        cy.request({
            method: 'POST',
            url: URL_BASE_BACK + "/login",
            headers: { "fuso-horario-local": "America/Sao_Paulo"},
            body: usuario,
            failOnStatusCode: false,
          }).then( ( { body } ) => {
            window.localStorage.setItem('authToken', body.key.token);    
        });
    });
}

const LOGAR = () => {
    let usuario = null;

    cy.clearCookie('ci_session_smartsolar');  

    cy.fixture('usuarioIntegradorLogin.json').then((usuarioLogin) => {
        usuario = usuarioLogin;
    });

    cy.session("sessionUsuario", () => {
        cy.visit("/");

        cy.get('#email').type(usuario.email);
        cy.get('#senha').type(usuario.senha);

        cy.contains('Login').click();

        cy.url({timeout: DEZ_SEGUNDOS}).should('include', '/dashboard');
    });
}

export {
    LOGAR_ADMIN_BACK,
    LOGAR_ADMIN,
    LOGAR_BACK,
    LOGAR
}