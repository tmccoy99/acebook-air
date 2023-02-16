describe('Adding a comment to a post', () => {
  beforeEach(() => {
    cy.signup('user@email.com', '12345678');
    cy.login('user@email.com', '12345678');
  });

  it('create a new post then create a new comment', () => {
    cy.url().should('include', '/posts');
    cy.get('#post-input').type('Hello world');
    cy.get('#submit').click();
    cy.contains('Hello world');
    //click add comment button
    //type 'new comment'
    //click submit button
    //expect cy.contains('new comment)
  });
  it('create a new post then create 2 new comments', () => {
    cy.url().should('include', '/posts');
    cy.get('#post-input').type('Hello world');
    cy.get('#submit').click();
    cy.contains('Hello world');
    //click add comment button
    //type 'new comment'
    //click submit button
    //click add comment button
    //type 'second new comment'
    //click submit button
    //expect cy.contains('new comment)
    //expect cy.contains('second new comment)
  });
  it('contains a show more button when there are 5 comments', () => {
    cy.url().should('include', '/posts');
    cy.get('#post-input').type('Hello world');
    cy.get('#submit').click();
    cy.contains('Hello world');
    //click add comment button
    //type 'new comment'
    //click submit button
    //click add comment button
    //type 'second new comment'
    //click submit button
    //click add comment button
    //type 'third new comment'
    //click submit button
    //click add comment button
    //type 'fourth new comment'
    //click submit button
    //click add comment button
    //type 'five new comment'
    //click submit button
    cy.visit('/posts');
    cy.contains('Show more'); //show more button
  });
});

//sign up, login, create a new post, create a new comment
//sign up, login, create a new post, create 2 new comments
//sign up, login, create a new post, create a new comment and like the comment
//sign up, login, create a new post, create a new comment and like the comment
