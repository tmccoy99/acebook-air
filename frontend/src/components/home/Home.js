import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = ({ navigate }) => {
  return (
    <div className={styles.container}>
      <h2>Welcome to Acebook</h2>
      <p>
        Acebook is a social media platform that allows users to connect with
        friends, family, organizations and public figures. As part of the
        community you can interact to other users and share pictures and posts.{" "}
      </p>
      <div className={styles.links}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <p></p>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <p></p>
      </div>
      <div className={styles.homeImage}>
        <img src="/images/noback-community-acebook.svg" alt="home" />
      </div>
    </div>
  );
};

export default Home;
