

it('exemplo de timeout', function() {
    cy.visit('/timeout')

    cy.contains('button', 'Habilita').click()

    //sempre que for usado o timeout, tem que ser direto na funcao que esta com o problema

    cy.get('#firstname')
        .should('be.visible', {timeout: 7000})

})