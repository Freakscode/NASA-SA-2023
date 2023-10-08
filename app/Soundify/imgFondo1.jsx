import React from 'react';

const divStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: 'url("imgs/Speakers.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: '0.5',
};

function Img1Fondo() {
  return (
    <div style={divStyle}>
      {/* Puedes colocar cualquier contenido adicional que desees */}
    </div>
  );
}

export default Img1Fondo;