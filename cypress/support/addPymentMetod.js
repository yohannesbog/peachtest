Cypress.Commands.add("addPaymentMethod", () => {
  cy.get('[href="/account-settings"]').contains("Settings").click();
  cy.get('[class="payment-method-container"] > div > button')
    .contains("Add payment method")
    .click();
  cy.get(".payment-selection-btn-group > :nth-child(2)")
    .contains("Debit Card")
    .click();
  cy.get('[name="first name"]').type("Peach", { force: true });
  cy.get('[name="last name"]').type("Test", { force: true });
  cy.get('[class="with-card-type"] input').type("378282246310005", {
    force: true,
  });
  cy.get(
    ".payment-type-form > div:nth-child(3) > label:nth-child(2) > input"
  ).type("05/23", { force: true });
  cy.get(
    ".payment-type-form > div:nth-child(3) > label:nth-child(3) > input"
  ).type("123", { force: true });
  cy.get(
    ".payment-type-form > div:nth-child(3) > label:nth-child(4) > input"
  ).type("12345", { force: true });
  cy.get('[data-cy="submit"]').click();
  cy.wait("@postCard");
  cy.get(".message-status > .message").should(
    "have.text",
    "Debit card successfully added."
  );
  cy.get(
    ':nth-child(3) > .info-card-row > [data-testid="noShowMobile"] > .label-group > .labels > .label'
  ).contains("Debit Card *0005");
});

Cypress.Commands.add("removeCard", () => {
  cy.get('[href="/account-settings"]').contains("Settings").click();
  cy.get(
    ':nth-child(3) > .info-card-row > [data-testid="noShowMobile"] > .label-group > .labels > .label'
  ).contains("Debit Card *0005");
  cy.get(
    '[class="payment-method-container"] section [class="editable-container"]:nth-child(3) button'
  )
    .contains("Remove")
    .click();
  cy.get(".Modal__ModalActions-sc-1iof6kt-6 > :nth-child(1)").click({force:true});
  cy.wait("@removeCard");
});
