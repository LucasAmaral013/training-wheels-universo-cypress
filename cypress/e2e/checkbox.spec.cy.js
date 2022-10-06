import 'cypress-each'

it('deve marcar os top 5 filmes da marvel', function () {
    cy.visit('/checkboxes')

    //Eu passei um valor errado de proposito, para ver se ia continuar percorrendo o forEach e me mostrar o item com erro no final
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

    const movies= [
        'avengers9',
        'cap2',
        'guardians',
        'antman',
        'spider'
    ]

    it.each(movies)('deve marcar os top 5 filmes da marvel, cada filme é um teste', (m) => {
        cy.visit('/checkboxes')
        cy.get(`input[name=${m}]`)
        .click()
        .should('be.checked')

    } )
