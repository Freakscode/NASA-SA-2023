import React, { useState } from 'react';

function ImgHover(props) {
  const { imageUrl, audioUrl } = props;
  const [playAudio, setPlayAudio] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleAudio = () => {
    setPlayAudio(!playAudio);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
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
        <div className="grid grid-cols-2 gap-4 text-white text-center">
          <div className="p-2" onClick={toggleAudio}>
            <img
              src="/imgs/icons8-play-420.png"
              alt="Ilustración 1"
              width={75}
              height={50}
              style={{ cursor: !playAudio ? 'pointer' : 'not-allowed' }}
            />
          </div>

          <div className="p-2" onClick={toggleModal}>
            <img src="/imgs/icons8-info-420.png" alt="Ilustración 2" width={75} height={50} />
          </div>
        </div>
      </div>

      {playAudio && (
        <audio src={audioUrl} autoPlay controls>
          Your browser does not support the audio element.
        </audio>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4">
            <p>Información predeterminada</p>
            <button onClick={toggleModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImgHover;