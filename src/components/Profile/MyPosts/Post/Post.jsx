import React from 'react';

import FriendAvatar from '../../../../images/profile/friend_avatar.png';
import Like from '../../../../images/profile/like.png';

import classes from './Post.module.css';

function Post(props) {
  return (
    <div className={classes.item}>
      <img src={FriendAvatar} alt="friend avatar" className={classes.avatar} />
      {props.message}
      <div>
        <img src={Like} alt="like" className={classes.like} />
        <span>{props.likeCount}</span>
      </div>
    </div>
  );
}

export default Post;
