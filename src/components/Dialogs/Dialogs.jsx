import React from 'react';

import { DialogItem, Message, NewMessage } from './../../components';

import classes from './Dialogs.module.css';

function Dialogs(props) {
  let dialogsElements = props.state.dialogs.map((d, i) => (
    <DialogItem key={i} name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m, i) => (
    <Message key={i} message={m.message} id={m.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <NewMessage addMessage={props.addMessage} />
      </div>
    </div>
  );
}

export default Dialogs;
