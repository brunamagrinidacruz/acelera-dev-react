import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  return (
    <article className="post" data-testid="post">
      <header className="post__header">
        <div className="user">
          <div className="user__thumb">
            <img src={userInfo.avatar} alt={userInfo.name}/>
          </div>

          <div className="user__name">
            {userInfo.name}
          </div>
        </div>

        <button
            className="post__context"
        >
          Following
        </button>
      </header>

      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt="" />
      </figure>
      <nav className="post__controls">
        <button className="post__control"><i className="fas fa-heart" /></button>
        <button className="post_status">curtido por {userInfo.name}</button>
      </nav>
    </article>
  );
};

export default Post;
