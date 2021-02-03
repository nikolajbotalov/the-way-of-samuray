import React from 'react';

import FriendAvatar from '../../../../images/profile/friend_avatar.png';
import Like from '../../../../images/profile/like.png';
import Share from '../../../../images/profile/share.png';

import classes from './Post.module.css';

function Post(props) {
  return (
    <div className={classes.item}>
      <img src={FriendAvatar} alt="friend avatar" className={classes.avatar} />
      {props.message}
      <div className={classes.statistic}>
        <img src={Like} alt="like" className={classes.like} />
        <span>{props.likeCount}</span>
        <img src={Share} alt="share" className={classes.share} />
      </div>
    </div>
  );
}

export default Post;
