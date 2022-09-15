

it('selecionar Buck por id', function () {
    cy.visit('/select')

    cy.get('#avengerList')
        .select('Bucky')
        .should('have.value', '2')
})

it('selecionar tony stark sem ser pelo id', function () {
    cy.visit('/select')

    cy.contains('option', 'Selecione um personagem')
        //estou entrando no elemneto pai que no caso é o select para pegar o elemento filho que nao tem o id, no caso é a opção tony stark    
        .parent()
        .select('Tony Stark')
        .should('have.value', '3')
})