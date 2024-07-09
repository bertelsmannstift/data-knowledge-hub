import React from "react";
import ReactPlayer from "react-player";

const VideoCard = ({ videoSrc, thumbnailSrc  }) => (
  // make card with author information
  <div
    className="player-wrapper">

    <ReactPlayer
  controls
  playing
  className="react-player"
  light={thumbnailSrc}
  url={videoSrc}
  width="100%"
  height="100%"
/>
  </div>
);

export default VideoCard;