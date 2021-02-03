import React from 'react';

import Avatar from '../../../images/profile/avatar.png';
import classes from './Message.module.css';

function Message(props) {
  return (
    <div className={classes.messageBlock}>
      <img src={Avatar} alt="message avatar" className={classes.avatar} />
      <div className={classes.message}>{props.message}</div>
    </div>
  );
}

export default Message;
