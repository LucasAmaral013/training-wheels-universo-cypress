

it('deve marcar os top 5 filmes da marvel', function () {
    cy.visit('/checkboxes')

    const movies = [
        'avengers',
        'cap2',
        'guardians',
        'antman',
        'spider'
    ]

    /*crianodo um loop para percorrer a lista de filmes. criei uma variavel para recebert os filmes(depois de rodar um item vai ficar salvo em m )*/
    
    movies.forEach(function(m){
        cy.get(`input[name=${m}]`)
        .click()
        .should('be.checked')
    })
})