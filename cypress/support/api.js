
// alias api requests to verify coorect request is made after each operation
Cypress.Commands.add('requests', () => {
    cy.intercept('GET', '/api/bootstrap?domain=peach-borrower.peach-dev.finance').as('accessApp')
    cy.intercept('POST', '/api/auth/token?userType=borrower&companyId=CP-L9BN-5J52').as('loginSuccess')
    cy.intercept('GET', '/api/companies/CP-L9BN-5J52/loan-types').as('pageLoad1')
    cy.intercept('GET', '/api/auth/permissions2').as('pageLoad2')
    cy.intercept('POST', '/api/people/BO-PBOQ-2QLJ/loans/LN-5K9P-RWYB/transactions?sync=true').as('postTransaction')
    cy.intercept('POST', '/api/people/BO-PBOQ-2QLJ/payment-instruments?force=false').as('postCard')
    cy.intercept('DELETE', '/api/people/BO-PBOQ-2QLJ/payment-instruments/PT-1J8E-2YWB').as('removeCard')
})
