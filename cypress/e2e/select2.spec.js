

it('deve selecionar uma unica opção', function () {
    cy.visit('/apps/select2/index.html')

    cy.get('.select2-selection--single').click()
    cy.contains('.select2-results__option', 'Cypress').click()
})

it('deve selecionar multiplas opções', function () {
    cy.visit('/apps/select2/index.html')

    //Estou criando um looping para selecionar tres opções em um mesmo teste
    const frameworks = [
        'Cypress',
        'Robot Framework',
        'Protractor'
    ]

    frameworks.forEach(function (framework) {
        cy.get('.select2-selection--multiple').click()
        cy.contains('.select2-results__option', framework).click()
    })

})