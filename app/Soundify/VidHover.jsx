import React, { useState } from 'react';

function VidHover(props) {
  const { videoUrl, audioUrl } = props;
  const [playAudio, setPlayAudio] = useState(false);

  const toggleAudio = () => {
    setPlayAudio(!playAudio);
  };

  return (
    <div className="relative group">
      {/* Video */}
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto"
        style={{ maxWidth: '100%', maxHeight: '100%', width: '300px', height: '250px' }}
      />

      {/* Efecto de hover */}
      <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        {/* Columna 1 */}
        <div className="p-2" onClick={!playAudio ? toggleAudio : null}>
          <img
            src="/imgs/icons8-play-420.png"
            alt="Ilustración 1"
            width={75}
            height={50}
            style={{ cursor: !playAudio ? 'pointer' : 'not-allowed' }}
          />
        </div>
      </div>

      {playAudio && (
        <audio src={audioUrl} autoPlay>
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default VidHover;