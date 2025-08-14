import Image from "next/image";

export default function LogoSlider() {
  const logos = [
    "/logos/gala.png",
    "/logos/game-starter.png",
    "/logos/keen.png",
    "/logos/moon.png",
    "/logos/motorverse.png",
    "/logos/nifty.png",
    "/logos/shards.png",
    "/logos/slingshot.png",
  ];

  return (
    <div className="overflow-hidden w-full">
      <div className="flex w-[200%] animate-slide">
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex-1 flex items-center justify-center">
            <Image
              src={logo}
              alt={`Logo ${idx + 1}`}
              width={200}  // set a max width for optimization
              height={64}  // height to match h-16
              className="h-16 w-auto object-contain"
              priority // optional: for faster load if visible immediately
            />
          </div>
        ))}
      </div>
    </div>
  );
}
