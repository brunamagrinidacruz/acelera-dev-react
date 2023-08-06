import React from 'react';

import Post from '../../components/Post';

const userInfo = {
  name: "Domino",
  avatar: "https://viniciusvinna.netlify.app/assets//api-instagram/profiles/domino/domino-profile.jpg"
}

const Posts = ({ posts = [], getUserHandler }) => (
  <div className="container" data-testid="posts">
    <section className="feed">
      { posts.map((post) => (
          <Post
            key={post.id}
            postInfo={post}
            userInfo={userInfo}
            // userInfo={getUserHandler(post.userId)}
            key={post.id}
          />
        ))
      }
    </section>
  </div>
);

export default Posts;
