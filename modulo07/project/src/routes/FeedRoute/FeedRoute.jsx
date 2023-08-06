import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const stories = [
  {
    id: 1,
    name: "T'Challa",
    avatar: "https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg",
  },
  {
    id: 2,
    name: "Bruce Wayne",
    avatar: "https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-profile.jpg",
  }
]

const posts = [
  {
    id: 1,
    imageUrl: "https://viniciusvinna.netlify.app/assets//api-instagram/profiles/domino/domino-1.jpg"
  },
  {
    id: 2,
    imageUrl: "https://viniciusvinna.netlify.app/assets//api-instagram/profiles/domino/domino-2.jpg"
  }
]

const FeedRoute = () => {
  return (
    <div data-testid="feed-route">
      <Stories stories={stories}/>
      <Posts posts={posts}/>
    </div>
  );
};

export default FeedRoute;
