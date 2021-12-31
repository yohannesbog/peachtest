describe('Make payment test suit', () => {
    beforeEach(()=> {
        cy.requests()
        cy.login()

    })
    afterEach(() =>{
        cy.signout() 
    })

    it('should make apayment', () => {
        cy.makePayment()
    })

   
})