describe("Visiting account page", () => {
  before(() => {
    cy.signup("hello@gmail.com", "123");
  });

  it("Can visit account page", () => {
    cy.login("hello@gmail.com", "123");
    cy.visit("/profile");
    cy.get("h2").contains("Profile");
  });

  it("Renders posts of the user", () => {
    cy.login("hello@gmail.com", "123");
    cy.makePost("Makers are the best");
    cy.visit("/profile");
    cy.get('[data-cy="post"]').should("contain.text", "Makers are the best");
  });

  it("Should not render posts from other users", () => {
    cy.signup("anotheruser@yahoo.co.uk", "password");
    cy.login("anotheruser@yahoo.co.uk", "password");
    cy.makePost("What a great website!");
    cy.login("hello@gmail.com", "123");
    cy.visit("/profile");
    cy.get('[data-cy="post"]').should(
      "not.contain.text",
      "What a great website!"
    );
  });
});
