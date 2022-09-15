

it('deve fazer o upload de foto', function(){
    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/luffy chapado.jpg'

    cy.get('input[name=file]').selectFile(imageFile, {force: true})

    cy.get('input[value=Upload]').click()

    cy.get('img[src="/uploads/luffy chapado.jpg"]', {timeout: 7000})
        .should('be.visible')


})