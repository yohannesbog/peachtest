describe("add/remove payment method test suit", () => {
  beforeEach(() => {
    cy.requests();
    cy.login();

  });
  afterEach(() =>{
    cy.signout() 
})

  it("Should add payment method", () => {
    cy.addPaymentMethod();
  });

  it("Should remove payment method/card", () => {
    cy.removeCard();
  });
});
