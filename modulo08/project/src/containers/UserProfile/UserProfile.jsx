import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="profile-data">
        <img className="user__thumb" src={avatar} alt={name}/>
        <div className="user__name">
          <p>{name}</p>
          <span>{username}</span>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
