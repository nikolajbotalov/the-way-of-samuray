const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

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
      // метод для добавления текста в новый пост
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_NEW_MESSAGE) {
      let newMessage = {
        // метод для добавления нового сообщения
        id: 4,
        message: action.message,
      };
      this._state.dialogsPage.messages.push(newMessage);
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

export const addNewMessageActionCreator = () => ({
  type: ADD_NEW_MESSAGE,
});

export default store;
window.store = store;
