describe("User navigates to news page", () => {
  it("successfully navigates to news", () => {
    cy.visit("https://statuesque-basbousa-0726c3.netlify.app/");
    // User clicks link
    cy.get(".burgerMenuBtn").click();
    cy.get(".list > :nth-child(2) > a").click();

    // Validate on the correct page
    cy.url().should("include", "/news");

    // Validate Content
    cy.get("h3").should("contain.text", "Latest News");

    // Go back to Homepage
    cy.get(".logo").click();
    cy.get("h1").should("contain.text", "Shardlow");
  });
});
