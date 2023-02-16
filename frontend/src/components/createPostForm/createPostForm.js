import React, { useState } from 'react';
require('dotenv').config();
//userid for post

const CreatePostForm = ({ navigate, token, id, setReload }) => {
  const [message, setMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch(process.env.API_URL + '/posts', {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message, user_id: id }),
    });

    if (response.status !== 201) {
      navigate('/posts');
    } else {
      setMessage('');
      navigate('/posts');
      setReload(true);
    }
  };
  return (
    <>
      <form className='create-post-form' onSubmit={handleSubmit}>
        <input
          id='post-input'
          placeholder='Whats on your mind?'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        ></input>
        <button id='submit' type='submit'>
          Submit post
        </button>
      </form>
    </>
  );
};

export default CreatePostForm;
