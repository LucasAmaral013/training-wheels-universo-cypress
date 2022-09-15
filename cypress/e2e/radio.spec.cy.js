

it('deve marcar o thor ragnarok', function () {

    cy.visit('/radios')

    cy.get('input[value=antman]')
        .click()
        .should('be.checked')

})