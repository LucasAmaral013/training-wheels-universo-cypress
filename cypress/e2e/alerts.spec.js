

it('deve exibir uma mensagem de alerta', () => {
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Alerta').click()

    /*on = ouvinte(ficar ouvindo algum evento que vai acontecer*/
    cy.on('windown:alert', function (result) {
        expect(result).to.equal('Isto é uma mensagem de alerta')
    })

})

it('deve confirmar a solicitação', () => {
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Confirma').click()
    /*Esse cod esa ouvindo o evento e ja esta confirmando*/
    cy.on('window:confirm', () => true)
    cy.get('#result').should('have.text', 'Mensagem confirmada')

})

it('deve cancelar a solicitação', () => {
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Confirma').click()
    /*Esse cod esa ouvindo o evento e ja esta confirmando*/
    cy.on('window:confirm', () => false)
    cy.get('#result').should('have.text', 'Mensagem não confirmada')

})

it('deve exibir mensagem de boas vindas com o meu nome', function () {
    cy.visit('/javascript_alerts')

    cy.window().then(function ($win) {
        /*stub= funções/metodos que substiuem comportamentos ou ate mesmo trechos de cod */
        cy.stub($win, 'prompt').returns('Lucas')
        cy.contains('button', 'Prompt').click()

    })
    cy.get('#result').should('have.text', 'Olá, Lucas')
})