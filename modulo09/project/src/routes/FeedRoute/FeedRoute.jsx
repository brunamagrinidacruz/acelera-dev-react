import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const userID = 1;
  const [stories, setStories] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    let newPosts = [...posts];

    //Getting all users
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users")
      .then(response => response.json())
      .then(users => {
        //To each user, get all his posts
        users.map((user) => {
          fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts`)
            .then(response => response.json())
            .then(posts => {
              //With all posts, add one by one in the array of posts
              //And add the respective user to the post too
              posts.map((post) => {
                newPosts.push({ ...post, user })
                setPosts(newPosts);
              })
            })
        })
      })

  }, []);

  useEffect(() => {
    let newStories = [...stories];

    //Getting all the stories
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories")
      .then(response => response.json())
      .then(stories => {
        //To each storie, it has a userId associeted
        //Throw this userId, we search the informations about the user as image and name
        stories.map((story) => {
          fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${story.userId}`)
            .then(response => response.json())
            .then(user => {
                newStories.push({...story, user})
                setStories(newStories);
            })
        })
      })

  }, [])

  return (
    <div data-testid="feed-route">
      { stories.length != 0 ?
          <Stories stories={stories} />
        : <Loading/>
      }
      { posts.length != 0 ?
          <Posts posts={posts} />
        : <Loading/>
      }
    </div>
  );
};

export default FeedRoute;
