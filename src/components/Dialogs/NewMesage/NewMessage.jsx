import React from 'react';
import classes from './NewMessage.module.css';

function NewMessage(props) {
  return (
    <div className={classes.messageBlock}>
      <textarea className={classes.textMessage} placeholder="Введите соообщение"></textarea>
      <button className={classes.sendMessage}>Отправить</button>
    </div>
  );
}

export default NewMessage;
