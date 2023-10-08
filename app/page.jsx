import Image from "next/image";
import React from "react";
import Link from "next/link";
import VideoBackground from "./VideoBackground";

export default function Home() {
  return (
    <div>
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

        {/* Contenido centralizado verticalmente */}
        <div className="flex flex-col w-full md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 md:px-16 md:py-16">
          {/* Columna de texto izquierda */}
          <div className="w-full text-center md:text-left px-8 md:px-0">
            <h1 className="text-5xl font-bold custom-color-1">
              "IF YOU PERCEIVE IT, YOU CAN SENSE IT"
            </h1>
            <p className="text-lg custom-color-2 mt-4">
              Explore the wonders of sound and the universe beyond your vision.
            </p>
            <h1 className="text-4xl font-semibold mt-8">
              EXPLORES THE UNIVERSE BEYOND WHAT YOU CAN{" "}
              <Link href="/Soundify">
                  <em className="custom-color-1 underline">SEE</em>
              </Link>
            </h1>
            <p className="text-lg custom-color-2 mt-4">
              Discover the hidden mysteries of the cosmos that await your
              curiosity.
            </p>
          </div>

          {/* Columna de ilustración derecha */}
          <div className="w-full md:w-1/2 md:px-4 md:py-1/2 items-center">
            {/* Aquí puedes colocar tu ilustración */}
            <img
              src="/gifs/airy-hand-holding-a-launching-rocket.gif"
              alt="Gif"
              width={500}
              height={1000}
            />
          </div>
        </div>

        <VideoBackground />
      </main>
    </div>
  );
}
