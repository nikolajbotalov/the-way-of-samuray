import React from 'react';
import ReactDOM from 'react-dom';
import state, { subscribe } from './redux/state';
import App from './App';
import './index.css';
import { addPost, updateNewPostText, addMessage } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMessage={addMessage}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
