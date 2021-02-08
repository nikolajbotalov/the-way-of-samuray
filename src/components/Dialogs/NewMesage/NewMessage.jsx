import React from 'react';
import classes from './NewMessage.module.css';

function NewMessage(props) {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;

    console.log(props.addMessage(text));
  };

  return (
    <div className={classes.messageBlock}>
      <textarea
        className={classes.textMessage}
        placeholder="Введите соообщение"
        ref={newMessageElement}></textarea>
      <button className={classes.sendMessage} onClick={addMessage}>
        Отправить
      </button>
    </div>
  );
}

export default NewMessage;
