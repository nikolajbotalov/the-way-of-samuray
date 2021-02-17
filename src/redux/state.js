const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'ADD-NEW-MESSAGE-BODY';

let store = {
  _state: {
    profilePage: {
      newPostText: 'checking',
      posts: [
        { id: 1, message: 'Привет, как ты?', likeCount: 15 },
        { id: 1, message: 'Это мой первый пост', likeCount: 7 },
        { id: 1, message: 'Я изучаю React.js', likeCount: 25 },
        { id: 1, message: 'Перейди в мой профиль', likeCount: 1 },
        { id: 1, message: 'Не удаляй мой пост, пожалуйста', likeCount: 3 },
      ],
    },
    dialogsPage: {
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
    },
  },
  // Перерисовываем приложение
  _callSubscriber() {
    console.log('state changed');
  },

  // методы для управления state
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer (наблюдатель)
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      // метод для добавление нового поста
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      // метод для обновления текста в новом посте
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      // метод для добавления нового сообщения
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({
        id: 4,
        message: body,
      });
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      // метод для обновления текста в новом сообщении
      this._state.dialogsPage.newMessageBody = action.newBody;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newBody: body,
});

export default store;
window.store = store;
