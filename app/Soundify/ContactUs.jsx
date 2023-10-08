import React from 'react';

function ContactSection() {
  return (
    <div className="w-1440 h-1115 mx-auto p-8">
      {/* Título */}
      <div className="text-5xl font-bold custom-color-1 text-center">
        Be a Game Changer in Space Exploration!
      </div>

      {/* Segunda fila con 2 columnas */}
      <div className="grid grid-cols-2 gap-8 mt-4">
        {/* Columna izquierda para la ilustración */}
        <div className="flex items-center justify-center">
          <img
            src="/imgs/Astronomy.png" // Reemplaza con la ruta de tu ilustración
            alt="Ilustración de la exploración del espacio"
            className="w-full h-auto"
            style={{ maxWidth: '100%', maxHeight: '100%', width: '400px', height: '300px' }}
          />
        </div>

        {/* Columna derecha para los campos de contacto */}
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <label className="text-lg font-semibold text-black" htmlFor="nombre">
              Name
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded"
              style={{ color: 'black' }} 
            />
          </div>
          <div className="mb-4">
            <label className="text-lg font-semibold text-black" htmlFor="correo">
              E-mail
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="e-mail"
              className="w-full p-2 border border-gray-300 rounded"
              style={{ color: 'black' }} 
            />
          </div>
          <div>
            <label className="text-lg font-semibold text-black" htmlFor="ocupacion">
              Occupation:
            </label>
            <input
              type="text"
              id="ocupacion"
              name="ocupacion"
              placeholder="Escribe tu ocupación"
              className="w-full p-2 border border-gray-300 rounded"
              style={{ color: 'black' }} 
            />
          </div>
          <button className="mt-4 py-2 px-4 bg-custom-color-1 text-white rounded hover:bg-custom-color-2">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
