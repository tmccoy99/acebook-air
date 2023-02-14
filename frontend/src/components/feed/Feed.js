import React, { useEffect, useState } from "react";
import CreatePostForm from "../createPostForm/createPostForm";
import Post from "../post/Post";

const Feed = ({ reload, setReload, navigate, path }) => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [id, setId] = useState(window.localStorage.getItem("user_id"));

  useEffect(() => {
    if (token) {
      fetch(path || "/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          window.localStorage.setItem("token", data.token);
          setToken(window.localStorage.getItem("token"));
          setId(window.localStorage.getItem("user_id"));
          setPosts(data.posts);
          setReload(false);
        });
    } else {
      navigate("/");
    }
  }, [reload]);

  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  if (token) {
    return (
      <>
        <h2>Posts</h2>
        <button onClick={logout}>Logout</button>

        <div id="feed" role="feed">
          {posts ? (
            posts
              .slice(0)
              .reverse()
              .map((post) => <Post post={post} key={post._id} />)
          ) : (
            <p>loading</p>
          )}
        </div>
      </>
    );
  }
};
export default Feed;
