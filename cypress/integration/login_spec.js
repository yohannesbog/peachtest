describe('login/logout test suit', () => {
    beforeEach(()=> {
        cy.requests()
    })
   it('Should login and logout succussfully', ()=> {
    cy.login()

    cy.signout()
})

   
})