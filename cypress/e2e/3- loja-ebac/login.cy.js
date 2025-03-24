/// <reference types="cypress"/>

describe('Funcionalidade login', () => {
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('gnas.teste@testecy.com.br')
        cy.get('#password').type('teste@1234')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, gnas.teste (não é gnas.teste? Sair)')

    })

} )