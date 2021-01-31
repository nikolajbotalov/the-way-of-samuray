import React from 'react';

import { MyPosts } from './../../components';

import classes from './Profile.module.css';

import ProfileHeaderImage from './../../images/profile/profile-header.jpg';
import Avatar from './../../images/profile/avatar.png';

function Profile() {
  return (
    <div className={classes.content}>
      <div>
        <img src={ProfileHeaderImage} alt="profile header" className={classes.header} />
      </div>
      <div>
        <img src={Avatar} alt="profile avatar" className={classes.avatar} />
        desc
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;
