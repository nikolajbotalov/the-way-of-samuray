import React from 'react';

import { MyPosts, ProfileInfo } from './../../components';

import classes from './Profile.module.css';

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export default Profile;
