import React from "react";
import Image from "next/image";

function ProjectInfo() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 md:py-4">
      <header className="flex items-center justify-between w-full mb-8 md:py-2 md:px-4">
        <div className="flex items-center space-x-8">
          <div className="w-25 h-25 rounded-full overflow-hidden">
            <Image src="/imgs/logo.png" width={120} height={120} />
          </div>
        </div>
        <nav className="flex items-center space-x-8">
          <a className="text-4xl menu-item-hover" href="/">
            HOME
          </a>
          <a className="text-4xl menu-item-hover" href="/Soundify">
            SOUNDIFY
          </a>
          <a className="text-4xl menu-item-hover" href="/project_info">
            PROJECT INFO
          </a>
          <a className="text-4xl menu-item-hover" href="/AboutUs">
            ABOUT US
          </a>
        </nav>
      </header>
      <div className="project-info">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Immersed in the Sounds of Space
            </h1>
            <h2 className="text-2xl font-semibold">Challenge:</h2>
            <p className="text-xl mt-2">
              Your challenge is to design a method to create sonifications of 3D
              NASA space datasets. What are some ways that 3D 'data cubes' could
              be converted into sounds to convey the richness of the data? If
              you want to create a 3D sonification fly-through, how can you
              convert the video image into sounds that accurately represent what
              is in the visualization? Do you want to develop a method to sonify
              a certain data set? Or maybe you want to develop an app that
              allows people to select data from an archive and then sonifies the
              selected data according to your prescription? Or perhaps you can
              develop a way to explore 3D data that merges visual and audio
              elements?
            </p>
          </div>
          <div className="w-full md:w-1/2">
            {/* You can add an image or illustration here */}
            <img
              src="/imgs/urban-inclusive-online-school.png"
              alt="Project Illustration"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-8 mt-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold">Solution:</h2>
            <p className="text-xl mt-2">
              Through Python and Programming languages, we develop a web
              application that sonifies some data like RGB images or videos.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            {/* You can add another image or illustration here */}
            <img
              src="/imgs/airy-the-hand-holding-the-planet.png"
              alt="Solution Illustration"
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Future Work:</h2>
          <p className="text-xl mt-2">
            We know that these initial approaches are not enough for a social
            impact like we want; however, it's the first step to democratizing
            space exploration for EVERYONE, without distinction of gender, age,
            race, or condition. Every human being deserves to explore space,
            even if we don't go out from Earth. Experiences are the best way to
            introduce and explore a new field. Electromagnetic fields,
            vibrations, and better sonification are our scope to make a really
            universal universe that everyone can explore.
          </p>
        </div>
      </div>
    </main>
  );
}

export default ProjectInfo;
