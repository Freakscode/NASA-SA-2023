import React from "react";
import Image from "next/image";

function HowItWorks() {
  return (
    <div className="w-1315 h-750 mx-auto p-8 w-full" id="How It Works">
      {/* Primera fila con título */}
      <div className="text-3xl font-bold custom-color-1 flex items-center justify-center h-full px-20">
        <div className="text-center text-7xl">HOW IT WORKS?</div>
      </div>

      {/* Segunda fila con 3 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
        <div className="px-15 py-16">
          <Image
            src="/imgs/Illustration - Asset 6.png"
            width={500}
            height={500}
          />
        </div>

        {/* Columna 2 */}
        <div className="py-16 px-20 flex justify-center">
          <Image src="/imgs/Arrow 1.png" width={200} height={100} />
        </div>

        {/* Columna 3 */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-2">
            {/* Fila 1, Columna 1 */}
            <div className="py-2">
              <Image
                src="/imgs/flame-white-smoke-from-the-mug.png"
                width={100}
                height={150}
              />
            </div>

            {/* Fila 1, Columna 2 */}
            <div className="py-16">
              <Image
                src="/imgs/techny-machine-vision-icon.png"
                width={100}
                height={150}
              />
            </div>

            {/* Fila 2, Columna 1 */}
            <div className="py-2">
              <Image
                src="/imgs/icons8-listen-480.png"
                width={100}
                height={150}
              />
            </div>

            {/* Fila 2, Columna 2 */}
            <div className="py-2">
              <Image src="/imgs/looney-tongue.png" width={100} height={150} />
            </div>
          </div>
        </div>
      </div>

      {/* Tercera fila con párrafo */}
      <div className="mt-8">
        <p className="text-4xl">
          Soundify creates a sensory journey that harmonizes with the visual
          content of the image or video, crafting a captivating multisensory
          landscape that will transport you to another dimension.
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
