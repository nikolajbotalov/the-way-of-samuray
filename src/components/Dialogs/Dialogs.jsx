import React from 'react';

import { DialogItem, Message } from './../../components';
import classes from './Dialogs.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReduces';

function Dialogs(props) {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d, i) => <DialogItem key={i} name={d.name} id={d.id} />);
  let messagesElements = state.messages.map((m, i) => (
    <Message key={i} message={m.message} id={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  // метод добавления нового сообщения
  let onSendMessageClick = () => {
    // debugger;
    props.store.dispatch(sendMessageCreator());
  };

  // метод обновления текста нового сообщения
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Введите сообщение"></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
