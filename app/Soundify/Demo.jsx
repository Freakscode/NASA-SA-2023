"use client";
import React from "react";
import Image from "next/image";
import ImgHover from "./ImgHover";
import VidHover from "./VidHover";
import ContactSection from "./ContactUs";

export default function Demo() {
  return (
    <div className="w-1410 h-715 mx-auto p-8 center-items">
      {/* Primera fila con título centrado verticalmente */}
      <div className="text-5xl font-bold custom-color-1 flex items-center justify-center h-full">
        TRY THIS!
        <br></br>
      </div>

      {/* Primera fila con 3 columnas */}
      {/* Primera fila con 3 columnas */}
      <div className="grid grid-cols-3 gap-8 mt-4">
        {/* Columna 1 */}
        <ImgHover
          imageUrl="/imgs/STScI-01GW30QM3C2WX3VHPP1A67X48W.png"
          audioUrl="/audios/Blue_Planet.wav"
        />

        {/* Columna 2 */}
        <ImgHover
          imageUrl="/imgs/STScI-01H0N3J0FZS2HPRTX17ZPJ91DW.png"
          audioUrl="/audios/STScI-01H0N3J0FZS2HPRTX17ZPJ91DW.wav"
        />

        {/* Columna 3 */}
        <ImgHover
          imageUrl="/imgs/STScI-01H5Q6XWG3GGKQVTFHYXN032KM.png"
          audioUrl="/audios/STScI-01H5Q6XWG3GGKQVTFHYXN032KM.wav"
        />
      </div>

      {/* Segunda fila con 3 columnas */}
      <div className="grid grid-cols-3 gap-8 mt-4">
        {/* Columna 1 */}
        <ImgHover
          imageUrl="/imgs/STScI-01H7TESNNSX9CH4EQ29C919C4M.png"
          audioUrl="/audios/STScI-01H7TESNNSX9CH4EQ29C919C4M.wav"
        />

        {/* Columna 2 */}
        <VidHover
          videoUrl="/videos/STScI-01F0ATBX9PE8NE9D6TE5PMZ9HT.mp4"
          audioUrl="/audios/STScI-01F0ATBX9PE8NE9D6TE5PMZ9HT.wav"
        />

        {/* Columna 3 */}
        <VidHover
          videoUrl="/videos/The Flickering Light of Dual Quasars_1.mp4"
          audioUrl="/audios/The Flickering Light of Dual Quasars_1.wav"
        />
      </div>

      {/* Tercera fila con 1 div vacio con columna centrada */}
      <div className="text-6xl font-bold custom-color-1 flex items-center justify-center h-full py-20">
        INTERESTING? TRY MORE!
      </div>
      <div className="text-2xl font-bold custom-color-1 justify-center h-full">
        Explore the Universe through Artistic Eyes! Transform NASA's cosmic
        images into mesmerizing artworks. Compare M31_Core_0 with a Van Gogh
        twist. Dive deeper into cosmic wonders!
      </div>

      {/* Cuarta fila con 2 columnas */}

      <div className="grid grid-cols-2 gap-10 mt-4 px-20 flex center-items">
        {/* Columna 1 */}
        <ImgHover
          imageUrl="/imgs/m31_core_0.png"
          audioUrl="/audios/STScI-01H7TESNNSX9CH4EQ29C919C4M.wav"
        />

        {/* Columna 2 */}
        <div className="space-x-15">
          <ImgHover
            imageUrl="/imgs/DreamShaper_v7_A_Van_Gogh_picture_in_a_Renaissance_frame_0.jpg"
            audioUrl="/audios/DreamShaper_v7_A_Van_Gogh_picture_in_a_Renaissance_frame_0 (1).wav"
          />
          <span className="flex items-center">
            Image to Image generation with leonardo.ai
          </span>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
