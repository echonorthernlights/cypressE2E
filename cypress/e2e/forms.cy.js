describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("subscribe form", () => {
    cy.contains(/Testing Forms/i);

    cy.contains(/Successfully subbed: email@gmail.com!/i).should("not.exist");
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");

    cy.get("@subscribe-input").type("email@gmail.com");
    cy.getDataTest("subscribe-button").click();

    cy.contains(/Successfully subbed: email@gmail.com!/i).should("exist");

    cy.wait(3000);
    cy.contains(/Successfully subbed: email@gmail.com!/i).should("not.exist");

    cy.get("@subscribe-input").type("email@gmail.io");
    cy.getDataTest("subscribe-button").click();

    cy.contains(/invalid email: email@gmail.io!/i).should("exist");

    cy.wait(3000);
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail/i).should("exist");
  });
});
