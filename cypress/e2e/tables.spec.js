const { realClick } = require("cypress-real-events/commands/realClick")


it('deve exibir 7 séries no total', function () {
    cy.visit('/tables')

    //estou obtendo a qauntitade total de itens na tablea
    cy.get('table tbody tr')
        .then(function (series) {
            //length serve para calcular a quantidade de series
            expect(series).to.have.length(7)
        })

})

it('deve exibir a serie loke', () => {
    cy, visit('/tables')

    cy.get('table tbody tr', 'Loki')
        .then(function (item) {
            expect(item).to.contain('Marvel')
            expect(item).to.contain('Disney+')
            expect(item).to.contain('2021')
        })
})

it('deve remover a serie round 6', function () {
    cy.visit('/tables')

    cy.contains('table tbody tr', 'Round 6')
        .then(function (item) {
            item.find('.delete').trigger('click')
        })
        .should('not.exist')

    cy.get('table tbody tr')
        .then(function (series) {
            expect(series).to.have.length(6)
        })
})