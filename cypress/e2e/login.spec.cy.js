

it('deve logar com sucesso', function () {
    cy.visit('/login')

    cy.get('#nickId').type('papitorocks')
    cy.get('#passId').type('pwd123')

    cy.get('button[type=submit]').click()

    //^=serva para ele pegar o elemento que comeca com...
    cy.get('h3[class^="title"]')
        .should('have.text', 'Olá Papito, bem-vindo ao Orkut')

    const expectecText = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'
    cy.get('p[class=subheader]')
        .should('have.text', expectecText)
})