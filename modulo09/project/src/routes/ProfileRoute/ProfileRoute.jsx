import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users")
      .then(response => response.json())
      .then(users => {
        setUser(findUser(users, username));
      })
  }, [])

  function findUser(users, username) {
    for(let i = 0; i < users.length; i++) {
      if(users[i].username == username)  {
        return users[i];
      }
    }
  }

  return (
    <div data-testid="profile-route"> 
      <UserProfile avatar={user.avatar} name={user.name} username={user.username} />
      <UserPosts posts={posts} />
    </div>
  );
};

export default ProfileRoute;
