describe("Fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Contains correct header text", () => {
    cy.getDataTest("home-header").contains(/Why cypress?/i);
  });
  it("Accordion works correctly", () => {
    cy.contains(
      /An all-in-one testing framework, assertion library, with mocking and stubbing/i
    ).should("not.be.visible");

    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();

    cy.contains(
      /An all-in-one testing framework, assertion library, with mocking and stubbing/i
    ).should("be.visible");

    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(
      /An all-in-one testing framework, assertion library, with mocking and stubbing/i
    ).should("not.be.visible");
  });
});
