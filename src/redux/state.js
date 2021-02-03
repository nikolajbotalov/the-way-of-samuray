let state = {
  profilePage: {
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
      { id: 1, message: 'Хорошо, у тебя как?' },
      { id: 1, message: 'Замечательно' },
    ],
  },
};

export default state;
