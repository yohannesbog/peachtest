const email = "auto.user+bo-pboq-2qlj@peachfinance.com";
const password = "hello12345";

// login with valid password and username
Cypress.Commands.add("login", () => {
  cy.visit("https://peach-borrower.peach-dev.finance/login");
  cy.wait("@accessApp");
  cy.get('[name="email"]').scrollIntoView().type(email, { force: true });
  cy.get('[name="password"]').scrollIntoView().type(password, { force: true });
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
