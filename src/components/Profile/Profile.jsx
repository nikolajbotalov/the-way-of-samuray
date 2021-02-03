import React from 'react';

import { MyPosts, ProfileInfo } from './../../components';

import classes from './Profile.module.css';

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </div>
  );
}

export default Profile;
