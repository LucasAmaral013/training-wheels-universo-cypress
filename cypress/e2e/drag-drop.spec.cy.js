

describe('Drag And Drop', function(){

    before(function(){
        cy.visit('/drag_and_drop')
    })

    it('deve arrastar o cypress para a caixinha do node', function(){
    
        const dataTransfer = new DataTransfer()
    
        cy.get('img[alt=Cypress]').trigger('dragstart',{dataTransfer})
    
    
        //elemento destino da img
        cy.get('.nodejs figure[draggable=true]').trigger('drop',{dataTransfer})
    })
    
    it('deve arrastar o robot para a caixinha do python', function(){
        
        const dataTransfer = new DataTransfer()
    
        cy.get('img[alt="Robot Framework"]').trigger('dragstart',{dataTransfer})
    
    
        //elemento destino da img
        cy.get('.python figure[draggable=true]').trigger('drop',{dataTransfer})
    })

})


