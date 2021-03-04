const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  newPostText: 'checking',
  posts: [
    { id: 1, message: 'Привет, как ты?', likeCount: 15 },
    { id: 1, message: 'Это мой первый пост', likeCount: 7 },
    { id: 1, message: 'Я изучаю React.js', likeCount: 25 },
    { id: 1, message: 'Перейди в мой профиль', likeCount: 1 },
    { id: 1, message: 'Не удаляй мой пост, пожалуйста', likeCount: 3 },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      // метод для добавление нового поста
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      // метод для обновления текста в новом посте
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
