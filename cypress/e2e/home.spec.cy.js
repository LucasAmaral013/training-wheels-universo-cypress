it('deve exibir a home page', function () {
  cy.visit('/')
  
  cy.title()
    .should('eq', 'Training Wheels | QAninja')

  // Estou vendo se o elemento esta visivel na tela
    cy.get('ul[class=menu-list]')
    .should('be.visible')
})