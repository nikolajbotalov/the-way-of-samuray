const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'ADD-NEW-MESSAGE-BODY';

let initialState = {
  dialogs: [
    { id: 1, name: 'Ирина' },
    { id: 2, name: 'Дмитрий' },
    { id: 3, name: 'Сергей' },
    { id: 4, name: 'Михаил' },
    { id: 5, name: 'Алексей' },
    { id: 6, name: 'Кирилл' },
    { id: 7, name: 'Максим' },
  ],
  messages: [
    { id: 1, message: 'Привет, как у тебя дела?' },
    { id: 2, message: 'Хорошо, у тебя как?' },
    { id: 3, message: 'Замечательно' },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      // метод для добавления нового сообщения
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({
        id: 4,
        message: body,
      });
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      // метод для обновления текста в новом сообщении
      state.newMessageBody = action.newBody;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newBody: body,
});

export default dialogsReducer;
