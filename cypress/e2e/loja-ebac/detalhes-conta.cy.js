/// <reference types="cypress"/>

describe('Funcionalidade: detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
        cy.login('gnas.teste@testecy.com.br', 'teste@1234')
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Guilherme', 'Augusto', 'gnasxd')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
});
