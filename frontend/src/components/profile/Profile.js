import Feed from '../feed/Feed';
import React, { useState } from 'react';
import styles from "./Profile.module.css";

function Profile({ navigate }) {
  const [reload, setReload] = useState(false);

  return (
    <>
    <div className={styles.homeContainer}>
      <h2>Welcome to your Profile page</h2>
      <Feed
        navigate={navigate}
        path={'account'}
        reload={reload}
        setReload={setReload}
      ></Feed>
    </div>
    </>
  );
}

export default Profile;
