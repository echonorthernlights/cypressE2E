describe("Homepage tests(why Cypress?)", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Contains correct header text", () => {
    cy.getDataTest("home-header").contains(/Why cypress?/i);
  });
  it("Accordion works correctly", () => {
    cy.contains(/Runs in the browser and wrote in JavaScript/i).should(
      "not.be.visible"
    );

    cy.get('[data-test="accordion-item-3"] div[role="button"]').click();

    cy.contains(/Runs in the browser and wrote in JavaScript/i).should(
      "be.visible"
    );

    cy.get('[data-test="accordion-item-3"] div[role="button"]').click();
    cy.contains(/Runs in the browser and wrote in JavaScript/i).should(
      "not.be.visible"
    );
  });
});
