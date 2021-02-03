import React from 'react';

import { Post } from '../../../components';

import classes from './MyPosts.module.css';

function MyPosts(props) {
  let postElements = props.posts.map((p, i) => (
    <Post key={i} message={p.message} id={p.id} likeCount={p.likeCount} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
}

export default MyPosts;
