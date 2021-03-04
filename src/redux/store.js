import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReduces';
import feedsReducer from './feedsReducer';

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
    feedsPage: {},
    musicPage: {},
    settingsPage: {},
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.feedsPage = feedsReducer(this._state.feedsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
