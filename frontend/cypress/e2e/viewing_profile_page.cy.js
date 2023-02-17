describe('Visiting profile page', () => {
  before(() => {
    cy.signup('user@email.com', '12345678');
  });

  it('Can visit account page', () => {
    cy.login('user@email.com', '12345678');
    cy.visit('/profile');
    cy.get('h2').contains('Welcome to your Profile page');
  });
});
