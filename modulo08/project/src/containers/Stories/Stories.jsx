import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const showStory = false;

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {
            stories.map((story, index) => (
              <button
                key={story.id}
                // onClick={() => handleStory(story)}
                className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}
              >
                <div className="user__thumb__wrapper">
                  <img src={story.user.avatar} alt={story.user.name} />
                  </div>
              </button>
            ))
          }
        </div>
      </section>

      {showStory && (
        <Story />
        )}
    </React.Fragment>
  );
};

export default Stories;
