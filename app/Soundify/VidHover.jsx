import React, { useState } from 'react';

function VidHover(props) {
  const { videoUrl, audioUrl } = props;
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
        {/* Div de dos columnas con ilustraciones constantes */}
        <div className="grid grid-cols-2 gap-4 text-white text-center">
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

          {/* Columna 2 */}
          <div className="p-2" onClick={toggleModal}>
            <img src="/imgs/icons8-info-420.png" alt="Ilustración 2" width={75} height={50} />
          </div>
        </div>
      </div>

      {playAudio && (
        <audio src={audioUrl} autoPlay>
          Your browser does not support the audio element.
        </audio>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4">
            {/* Contenido del modal */}
            <p>Información predeterminada</p>
            <button onClick={toggleModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VidHover;