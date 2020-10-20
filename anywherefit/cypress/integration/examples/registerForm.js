describe('register form test',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/register') 
    })
    it('passes validation',()=>{
        cy.get("[data-cy=username]").type('ozlievano').should('have.value','ozlievano')
        cy.get("[data-cy=password]").type('haven1234').should('have.value','haven1234')
        cy.get('[data-cy=submit]').click().should("have.prop",{isDisabled: false})
       
    })

})