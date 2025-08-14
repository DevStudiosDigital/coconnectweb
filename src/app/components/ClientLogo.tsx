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
            <img
              src={logo}
              alt={`Logo ${idx + 1}`}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
