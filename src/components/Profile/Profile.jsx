import React from 'react';

import { MyPostsContainer, ProfileInfo } from './../../components';

import classes from './Profile.module.css';

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
      {/* <MyPostsContainer
        store={props.store}
        // posts={props.profilePage.posts}
        // newPostText={props.profilePage.newPostText}
        // dispatch={props.dispatch}
      /> */}
    </div>
  );
}

export default Profile;
