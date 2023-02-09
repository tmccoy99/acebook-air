describe('Visiting account page', () => {
  before(() => {
    cy.signup('user@email.com', '12345678', 'orhan');
    cy.login('user@email.com', '12345678');
  });

  it('Can visit account page', () => {
    cy.visit('/profile');
    cy.get('h2').contains('Profile');
  });

  // it('returns post of user', () => {
  //   cy.makePost('Makers are the best');
  //   cy.visit('/profile');
  //   // cy.get('[data-cy="post"]').should('contain.text', 'Makers are the best');
  // });
});
