import Image from "next/image";
import About from "./AboutUs";

function AboutUs() {
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
        <About />
        </main>
        
        
  );
}

export default AboutUs;