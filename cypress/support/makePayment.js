var totalOverdue;

// Makes a payment and verify success message
Cypress.Commands.add("makePayment", () => {
  cy.get('.loan-card-group > div:nth-child(1) > a > div > div.header > h3')
     .should('have.value', 'dzfyuta')
    cy.get('[class="loan-details"] [class="price"]')
      .invoke("text")
      .then((a) => {
        totalOverdue = a.substr(1);
      });
      let pymt = 50;
        cy.get('[class="loan-details"]').click({ force: true });
        cy.get(" button > p").contains("Make a payment").click();
        cy.get('.react-datepicker__input-container > input').click()
         .clear()
         .type('Jan 5, 2022', {force:true});
        cy.get('[data-cy="radio-other_amount"]').click();
        cy.get('input[placeholder="0.00"]').type(pymt, {force:true});
        cy.get('[class="Select__PlaceholderSpan-sc-1m857xn-0 hyfpEb"]').click();
        cy.get('[class="getIconWithLabel__Span-sc-di825u-1 gRyCLj"]')
        .first()
        .click()
        cy.wait(3000)
        cy.get('[data-cy="submit"]').contains('Continue').click()
        cy.get('[data-cy="modal-submit"]').click()
        cy.wait('@postTransaction')
        cy.get('[data-testid="payment-successful-message"]').should('have.text', 'Payment was successfully scheduled.')
        cy.get('[data-cy="submit"]').contains('Done')
        .click()
      
  });
  