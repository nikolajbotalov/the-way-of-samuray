import React from 'react';

import { Post } from '../../../components';
import classes from './MyPosts.module.css';

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';

function MyPosts(props) {
  let postElements = props.posts.map((p, i) => (
    <Post key={i} message={p.message} id={p.id} likeCount={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
