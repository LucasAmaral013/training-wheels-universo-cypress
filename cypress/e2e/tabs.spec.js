

it('nova guia', () => {
    cy.visit('/new_tab')

    //cy.contains('a', 'Clique aqui').click()

    cy.get('a[href="https://www.google.com.br"]')
        .should('have.attr', 'target', '_blank')
    //estou mudando a propriedade do elemento, pedido para remover o targer. O link vai ser aberto na mesma aba
    cy.contains('a', 'Clique aqui').invoke('removeAttr', 'target')

    cy.contains('a', 'Clique aqui').click()

    cy.get('input[name=q]').type('Cypress')

})