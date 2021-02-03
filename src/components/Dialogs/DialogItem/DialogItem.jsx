import React from 'react';
import { NavLink } from 'react-router-dom';

import Avatar from '../../../images/profile/friend_avatar.png';
import classes from './DialogItem.module.css';

function DialogItem(props) {
  return (
    <div className={classes.dialog}>
      <img src={Avatar} alt="friend avatar" className={classes.avatar} />
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;
