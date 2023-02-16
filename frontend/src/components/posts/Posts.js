import React, { useState } from 'react';
import CreatePostForm from '../createPostForm/createPostForm';
import Feed from '../feed/Feed';
import styles from "./Posts.module.css";

const Posts = ({ navigate }) => {
  const [token, setToken] = useState(window.localStorage.getItem('token'));
  const [id, setId] = useState(window.localStorage.getItem('user_id'));
  const [reload, setReload] = useState(false);

  return (
    <>
    <div className={styles.homeContainer}>
      <h2>Everyone's Posts</h2>
      <CreatePostForm
        navigate={navigate}
        token={token}
        id={id}
        setReload={setReload}
        className='create-post-form'
      />
      <Feed
        navigate={navigate}
        reload={reload}
        setReload={setReload}
        className='feed'
      />
      </div>
    </>
  );
};

export default Posts;
