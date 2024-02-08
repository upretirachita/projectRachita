
import React from 'react';

const VideoComponent = ({ title, description }) => {
  return (
    <div className="video-container">
      <h1>{title}</h1>
      <p>{description}</p>
      <video width="100%" height="auto" controls>
        <source src="/images/video1.webm" type="video/webm" />
        Many  browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
