import React from 'react';

import classes from './ProfileInfo.module.css';

import ProfileHeaderImage from './../../../images/profile/profile-header.jpg';
import Avatar from './../../../images/profile/avatar.png';

function ProfileInfo() {
  return (
    <div>
      <div>
        <img src={ProfileHeaderImage} alt="profile header" className={classes.header} />
      </div>
      <div className={classes.descriptionBlock}>
        <img src={Avatar} alt="profile avatar" className={classes.avatar} />
        desc
      </div>
    </div>
  );
}

export default ProfileInfo;
