import './globals.css';
import Image from "next/image";
import LogoSlider from "@/app/components/ClientLogo"
import FAQ from "./components/FAQ";
import HowItWork from './components/HowitWork';

export default function Home() {
  return (
    <div className="bg-black">
      <div className="font-sans grid gap-26 bg-[url('/banner-img.png')] bg-cover bg-no-repeat bg-center pb-10">
        <main className="flex flex-col gap-[32px] w-full">
          <div className="text-center sm:text-left">
            <Image
              src="/cc-logo.svg"
              alt="CC Logo"
              width={100}
              height={100}
              priority
              className="object-cover mx-auto sm:ml-0"
            />
          </div>
          <div className="w-full text-center justify-center items-center flex flex-col gap-2 transition-all">
              <div className="font-semibold text-[32px] text-secondary">JOIN THE</div>
              <h1 className="sm:text-[100px] text-[40px] font-extrabold max-w-[750px] leading-[40px] sm:leading-[95px] text-secondary text-center">
                LARGEST NETWORK
              </h1>
              <h2 className="text-[40px] font-black text-primary">IN WEB3</h2>
              <div className="flex gap-4 items-center flex-col sm:flex-row justify-center w-full py-4">
                <a
                  className="rounded-full border border-solid border-transparent flex items-center justify-center bg-secondary text-foreground gap-2 
                  font-medium text-[23px] px-6 py-2 transition-all transform hover:bg-primary hover:text-black hover:-translate-y-2"
                  href="https://calendly.com/rik-community3/30min"
                  target="_blank"
                >
                  <Image
                    className="dark:invert"
                    src="/play-buttton.png"
                    alt="Play Button"
                    width={20}
                    height={20}
                  />
                  Get in Touch
                </a>
              </div>
          </div>
        </main>
        <LogoSlider/>
      </div>
      <HowItWork/>      
      <FAQ/>
      {/* Footer */}
      <footer className="w-full bg-black text-center py-6 border-t border-gray-800">
        <a 
          href="https://x.com/CoConnect_?t=xF34z63b2OhMvZzPSyr_tA&s=09" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-secondary hover:text-primary transition-colors"
        >
          Follow us on Twitter
        </a>
      </footer>
    </div>
  );
}
