/* eslint-disable no-undef */
import Post from './Post';
const setReload = () => {};

describe('Post', () => {
  it('renders a post with a message', () => {
    cy.mount(
      <Post
        post={{
          _id: 1,
          message: 'Hello, world',
          likes: [],
          createdAt: '2023-02-14T11:44:40.970Z',
          user_id: {
            _id: '63ee52ddb6e29209de11f059',
          },
        }}
      />
    );
    cy.get('[data-cy="post"]').should('contain.text', 'Hello, world');
  });

  it('If passed less than four comments as a prop, will display comments', () => {
    cy.mount(
      <Post
        post={{
          _id: 1,
          message: 'Hello world again',
          likes: [],
          comments: [
            { message: 'another message', user_id: 1, post_id: 1, likes: [] },
            {
              message: 'another hello world',
              user_id: 2,
              post_id: 1,
              likes: [],
            },
          ],
          createdAt: '2023-02-14T11:44:40.970Z',
          user_id: {
            _id: '63ee52ddb6e29209de11f059',
          },
        }}
      />
    );
    cy.get('[data-cy="comment"]')
      .should('contain.text', 'another message')
      .and('contain.text', 'another hello world');
  });

  it('If passed four or more comments as a prop, will display the first three comments', () => {
    cy.mount(
      <Post
        post={{
          _id: 1,
          message: 'Hello world again',
          likes: [],
          comments: [
            { message: 'another message', user_id: 1, post_id: 1, likes: [] },
            {
              message: 'another hello world',
              user_id: 2,
              post_id: 1,
              likes: [],
            },
            { message: 'third message', user_id: 3, post_id: 1, likes: [] },
            {
              message: 'fourth message',
              user_id: 4,
              post_id: 1,
              likes: [],
            },
          ],
          user_id: {
            _id: '63ee52ddb6e29209de11f059',
          },
          createdAt: '2023-02-14T11:44:40.970Z',
        }}
      />
    );
    cy.get('[data-cy="comment"]')
      .should('contain.text', 'another message')
      .and('contain.text', 'another hello world')
      .and('contain.text', 'third message')
      .and('not.contain.text', 'fourth message');
  });

  it('will display an expand button if there are four or more comments', () => {
    cy.mount(
      <Post
        post={{
          _id: 1,
          message: 'Hello world again',
          likes: [],
          comments: [
            { message: 'another message', user_id: 1, post_id: 1, likes: [] },
            {
              message: 'another hello world',
              user_id: 2,
              post_id: 1,
              likes: [],
            },
            { message: 'third message', user_id: 3, post_id: 1, likes: [] },
            {
              message: 'fourth message',
              user_id: 4,
              post_id: 1,
              likes: [],
            },
          ],
          createdAt: '2023-02-14T11:44:40.970Z',
        }}
      />
    );
    cy.get('[data-cy="expand-button"]');
  });

  it('will NOT display an expand button if there are fewer than four comments', () => {
    cy.mount(
      <Post
        post={{
          _id: 1,
          message: 'Hello world again',
          likes: [],
          comments: [
            {
              message: 'another hello world',
              user_id: 2,
              post_id: 1,
              likes: [],
            },
            {
              message: 'fourth message',
              user_id: 4,
              post_id: 1,
              likes: [],
            },
          ],
          createdAt: '2023-02-14T11:44:40.970Z',
        }}
      />
    );
    cy.get('[data-cy="expand-button"]').should('not.exist');
  });

  it('after clicking expand button, all comments are visible', () => {
    cy.mount(
      <Post
        post={{
          _id: 1,
          message: 'Hello world again',
          likes: [],
          comments: [
            { message: 'another message', user_id: 1, post_id: 1, likes: [] },
            {
              message: 'another hello world',
              user_id: 2,
              post_id: 1,
              likes: [],
            },
            { message: 'third message', user_id: 3, post_id: 1, likes: [] },
            {
              message: 'fourth message',
              user_id: 4,
              post_id: 1,
              likes: [],
            },
          ],
          createdAt: '2023-02-14T11:44:40.970Z',
        }}
        setReload={setReload}
      />
    );
    cy.get('[data-cy="comment"]').should('not.contain.text', 'fourth message');
    cy.get('[data-cy="expand-button"]').click();
    cy.get('[data-cy="comment"]').should('contain.text', 'fourth message');
  });

  describe('like button', () => {
    it('Calls the /like endpoint and toggles likes on and off', () => {
      window.localStorage.setItem('token', 'fakeToken');
      window.localStorage.setItem('user_id', 'fakeId');

      cy.intercept({
        method: 'PATCH',
        url: '/posts/like',
      }).as('patchLike');

      cy.intercept({
        method: 'PATCH',
        url: '/posts/unlike',
      }).as('patchUnlike');

      cy.mount(
        <Post
          post={{
            _id: 1,
            message: 'Hello, world',
            likes: [],
            createdAt: '2023-02-14T11:44:40.970Z',
            user_id: {
              _id: '63ee52ddb6e29209de11f059',
            },
          }}
          setReload={setReload}
        />
      );

      cy.get('[data-cy=like-button]').should('exist');
      cy.get('[data-cy=like-button] img').should(
        'have.attr',
        'src',
        '/images/thumbOutline.png'
      );

      cy.get('[data-cy=like-button]').click();
      cy.wait('@patchLike');
      cy.get('[data-cy=like-button] img').should(
        'have.attr',
        'src',
        '/images/thumbFilled.png'
      );

      cy.get('[data-cy=like-button]').click();
      cy.wait('@patchUnlike');
      cy.get('[data-cy=like-button] img').should(
        'have.attr',
        'src',
        '/images/thumbOutline.png'
      );
    });
  });

  describe('delete button', () => {
    it('displays delete buttons', () => {
      window.localStorage.setItem('user_id', '63ee52ddb6e29209de11f059');

      cy.mount(
        <Post
          post={{
            _id: 1,
            message: 'Hello, world',
            likes: [],
            createdAt: '2023-02-14T11:44:40.970Z',
            user_id: {
              _id: '63ee52ddb6e29209de11f059',
            },
          }}
        />
      );
      cy.get('[data-cy=delete-button]').should('exist');
    });

    it('deletes post', () => {
      window.localStorage.setItem('token', 'fakeToken');
      window.localStorage.setItem('user_id', '63ee52ddb6e29209de11f059');
      cy.intercept({
        method: 'DELETE',
        url: '/posts',
      }).as('deletePost');
      cy.mount(
        <Post
          post={{
            _id: 1,
            message: 'Hello, world',
            likes: [],
            createdAt: '2023-02-14T11:44:40.970Z',
            user_id: {
              _id: '63ee52ddb6e29209de11f059',
            },
          }}
        />
      );
      cy.get('[data-cy=delete-button]').click();
      cy.wait('@deletePost');
      cy.contains('[data-cy="post"]').should('not.exist');
    });
  });

  describe('edit button', () => {
    it('displays edit button', () => {
      window.localStorage.setItem('user_id', '63ee52ddb6e29209de11f059');

      cy.mount(
        <Post
          post={{
            _id: 1,
            message: 'Hello, world',
            likes: [],
            createdAt: '2023-02-14T11:44:40.970Z',
            user_id: {
              _id: '63ee52ddb6e29209de11f059',
            },
          }}
        />
      );

      cy.get('[data-cy=edit-button]').should('exist');
    });

    it('allows editing of post', () => {
      window.localStorage.setItem('token', 'fakeToken');
      window.localStorage.setItem('user_id', '63ee52ddb6e29209de11f059');
      cy.intercept({
        method: 'PUT',
        url: '/posts',
      }).as('putUpdate');
      cy.mount(
        <Post
          post={{
            _id: 1,
            message: 'Hello, world',
            likes: [],
            createdAt: '2023-02-14T11:44:40.970Z',
            user_id: {
              _id: '63ee52ddb6e29209de11f059',
            },
          }}
        />
      );

      cy.get('[data-cy=edit-button]').click();
      cy.get('#text-value').innerHTML = 'testing';
      cy.get('[data-cy=edit-submit]').click();
      cy.wait('@putUpdate');
      cy.get('#text-value').should('contain.text', 'Hello, world');
    });
  });
});
