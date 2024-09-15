describe("homepage spec", () => {
  it("loads and elements are present", () => {
    cy.visit("https://www.ssjfc.co.uk");

    cy.get(".burgerMenuBtn").click();
  });
});
