

// login with valid password and username
Cypress.Commands.add("login", () => {
  cy.visit("https://peach-borrower.peach-dev.finance/login");
  cy.wait("@accessApp");
  cy.get('[name="email"]').scrollIntoView().type(Cypress.env('email'), { force: true });
  cy.get('[name="password"]').scrollIntoView().type(Cypress.env('password'), { force: true });
  cy.get('[data-cy="submit"]').click();
  cy.wait("@loginSuccess");
  cy.url().should("include", "finance/loans");
  cy.wait("@pageLoad1");
});

// signout from app
Cypress.Commands.add("signout", () => {
  cy.get('[href="/sign-out"]')
    .scrollIntoView()
    .contains("Sign out")
    .click();
});
