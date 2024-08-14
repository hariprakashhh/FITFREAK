import React, { useState } from 'react';
import './VideoGrid.css';

const VideoGrid = ({ videos }) => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const handleVideoClick = (videoIndex) => {
    setPlayingVideo(videoIndex);
  };

  return (
    <div className="video-gridb">
      {videos.map((video, index) => (
        <div key={index} className="video-containerb">
          <video
            src={video.src}
            controls={playingVideo === index}
            onClick={() => handleVideoClick(index)}
            poster={video.poster}
            className="videob"
          />
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
