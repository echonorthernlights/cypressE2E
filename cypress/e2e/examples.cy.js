describe("various examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("multi-page testing", () => {
    cy.getDataTest("home").click();
    cy.location("pathname").should("equal", "/");

    cy.getDataTest("overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getDataTest("fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.getDataTest("forms").click();
    cy.location("pathname").should("equal", "/forms");

    cy.getDataTest("examples").click();
    cy.location("pathname").should("equal", "/examples");

    cy.getDataTest("component").click();
    cy.location("pathname").should("equal", "/component");

    cy.getDataTest("best-practices").click();
    cy.location("pathname").should("equal", "/best-practices");
  });

  it.only("intercepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      //body: { messge: "Successfully intercepted" },
      fixture: "example.json",
    });
    cy.getDataTest("post-button").click();
  });
});
