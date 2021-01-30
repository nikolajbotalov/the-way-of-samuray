import React from 'react';

import ProfileHeaderImage from './../images/profile/profile-header.jpg';
import Avatar from './../images/profile/avatar.png';

function Profile() {
  return (
    <div className="content">
      <div>
        <img src={ProfileHeaderImage} alt="profile header img" className="" />
      </div>
      <div>
        <img src={Avatar} alt="profile-avatar" className="" />
        ava + desc
      </div>
      <div>
        my posts
        <div>New post</div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
