import React from 'react';

function VideoBackground() {
    return (
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/videos/CEERS_ Flight to Maisie's Galaxy_1.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

export default VideoBackground;