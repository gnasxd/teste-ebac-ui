/// <reference types="cypress"/>

describe('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('gnas.teste@testecy.com.br')
        cy.get('#password').type('teste@1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gnas.teste (não é gnas.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('gnas@testecy.com.br')
        cy.get('#password').type('teste@1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('gnas.teste@testecy.com.br')
        cy.get('#password').type('teste@0000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'A senha fornecida para o e-mail gnas.teste@testecy.com.br está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });

})