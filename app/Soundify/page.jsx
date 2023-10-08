import Image from "next/image";
import HowItWorks from "./HowItWorks";
import Demo from "./Demo";

function Soundify() {
  return (
    <main className="flex min-h-screen flex-col items-center p-16 md:py-4">
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

      <div
        className="flex w-1316 h-751 mx-auto md:flex-row md:flex-nowrap md:items-center md:justify-center md:px-16 md:py-16"
        id="What is"
      >
        {/* Columna izquierda */}
        <div className="w-1/2 px-2">
          <div className="text-4xl font-bold custom-color-1">
            Unleash the Power of
            <div className="text-8xl font-bold custom-color-1">SOUNDIFY</div>
          </div>
          <div className="mt-6">
            <p className="text-4xl">
              Immerse yourself in a universe of sensation, where the cosmos
              comes alive in ways you've never imagined.
            </p>
            <p className="text-4xl mt-4">
              With SOUNDIFY, explore celestial snapshots from the Hubble
              telescope transformed into multisensory marvels.
            </p>
            <p className="text-4xl mt-4">
              Step into a world where the stars serenade your senses and
              experience the wonders of space through perception.
            </p>
          </div>
        </div>

        {/* Columna derecha para la ilustración */}
        <div className="w-1/2">
          <img
            src="imgs/Speakers.png"
            alt="Ilustración"
            className="w-full h-full object-cover"
            width={750}
            height={500}
          />
        </div>
      </div>
      <HowItWorks />
      <Demo />
    </main>
  );
}

export default Soundify;
