
const niceIframe = function () {
    return cy
        .get('#weareqaninja')
        /*Esse comando serve para pegar um elemento na sua totalidade. Estou falando para ele pegar todo o corpo do iframe*/
        .its('0.contentDocument.body').should('not.be.empty')
        /*Função para aguardar uma promessa. Wrap= empaotar o resultado do its*/
        .then(cy.wrap)
}

const badIframe = function () {
    return cy
    .get('iframe[src*=instagram]')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)

}

it('deve validar o total de seguidores', () => {
    cy.visit('/bad_iframe')

    badIframe().contains('.FollowerCountText', '6.957 seguidores')
        .should('be.visible')

})

