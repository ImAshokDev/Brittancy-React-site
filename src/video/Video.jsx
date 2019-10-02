import React from 'react';
import './Video.scss';

const Video = ({ image }) => (
  <div className="video-section" style={{ backgroundImage: `url(${image})` }}>
    <Video />
  </div>
);

const VideoBlock = () => (
  <div className="video-block">
    <p>1</p>
  </div>
);

export default Video;
