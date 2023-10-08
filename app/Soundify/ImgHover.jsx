import React, { useState } from 'react';

function ImgHover(props) {
  const { imageUrl, audioUrl } = props;
  const [playAudio, setPlayAudio] = useState(false);

  const toggleAudio = () => {
    setPlayAudio(!playAudio);
  };

  return (
    <div className="relative group">
      <img
        src={imageUrl}
        alt="Descripción de la imagen"
        className="w-full h-auto"
        style={{ maxWidth: '100%', maxHeight: '100%', width: '300px', height: '250px' }}
      />

      <div className="hidden group-hover:block absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="p-2" onClick={toggleAudio}>
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
        <audio src={audioUrl} autoPlay controls>
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default ImgHover;
