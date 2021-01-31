import React from 'react';

import { Post } from '../../../components';

import classes from './MyPosts.module.css';

function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message="Hi, how are you?" likeCount="15" />
        <Post message="It's my first post" likeCount="7" />
        <Post message="I learn React.js" likeCount="25" />
        <Post message="Follow my profile" likeCount="1" />
        <Post message="Don't remove this post, please" likeCount="3" />
      </div>
    </div>
  );
}

export default MyPosts;
