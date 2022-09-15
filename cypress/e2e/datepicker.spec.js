

it('selecionar a data de nascimento', function () {
    cy.visit('/datepicker')

    const date = {
        month:'fev',
        year:'1983',
        /*estou criando uma expressao regular para pegar o valor exato
        / = serve para falar que eu vou criar uma expressao regular
        ^ = comeca cin
        $ = Termina com
        g serve para falar que a expressao é global e exata
        i = case insenitive serve para letra maiuscula e minuscula
        m = mais um criteria com aquela busca
        day: /^1$/g
        */
        day: 1
    }

    

    cy.get('.datetimepicker-dummy-input').click()

    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', date.month).click()

    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year span', date.year).click()

    cy.contains('button[class=date-item]', new RegExp('^' + date.day + '$', 'g')).click()
})