import React from "react";

function About() {
  // Array de objetos que contiene la información de los integrantes del equipo
  const teamMembers = [
    {
      name: "Gabriel Jaime",
      lastName: "Cardona Osorio",
      email: "gabcardona0782@gmail.com",
      linkedIn: "https://www.linkedin.com/in/freakscode/",
      imageSrc: "/imgs/Gabriel.jpeg", // Reemplaza con la ruta de la imagen del integrante 1
    },
    {
      name: "Sammy Valeria",
      lastName: "Arteaga Velásquez",
      email: "sammy.arteaga081@pascualbravo.edu.co",
      imageSrc: "/imgs/Sammy.jpeg", // Reemplaza con la ruta de la imagen del integrante 2
    },
    // Agrega más objetos para cada miembro del equipo
  ];

  return (
    <div className="about-us py-6">
      <div className="container mx-auto px-4">  
        <div className="flex elements-center flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-40">
              <div className="flex flex-col items-center">
                <div className="rounded-full overflow-hidden w-48 h-48 border-4 border-custom-color-1">
                  <img
                    src={member.imageSrc}
                    alt={`Profile of ${member.name} ${member.lastName}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold mt-4">
                  {member.name} {member.lastName}
                </h2>
                <p className="text-sm text-custom-color-1 mt-2">
                  {member.email}
                </p>
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 mt-2"
                >
                  LinkedIn
                </a>
                {/* Agrega más campos de información según tus necesidades */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
