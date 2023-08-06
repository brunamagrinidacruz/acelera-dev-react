import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const [userList, setUserList] = useState([]);
  
  useEffect(() => {
    fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users")
      .then(response => response.json())
      .then((data) => {
          console.log(data)
          setUserList(data);
        }
      );
  }, [])
  
  return (
    <div className="container" data-testid="users-route">
      <UsersList users={userList}/>
    </div>
  );
};

export default UsersRoute;
