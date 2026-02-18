import { useScrollAnimation } from "@/hooks/useScrollAnimation";


const logos = [
  {
    name: "Observe Now",
    src: "/data/observenow-logo.webp"
  },
  {
    name: "Team Computers",
    src: "/logo/TJsVZgIC_400x400-removebg-preview.png"
  },
  {
    name: "Cisco",
    src: "/logo/cisco-blue-logo-png-735811696610010utjhevbxcl-removebg-preview.png"
  },
  {
    name: "NetApp",
    src: "/logo/netapp-eps-vector-logo-free-11574067623apohbszxst-removebg-preview.png"
  }
];

const CollaborationSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-spacing bg-card" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{letterSpacing: 0.1}}>
          In <span className="bg-gradient-to-r from-purple-800 via-fuchsia-500 to-black bg-clip-text text-transparent font-bold">Collaboration</span> With
        </h2>

        <div className="flex flex-row items-center justify-center gap-10 md:gap-16">
          {logos.map((logo, i) => (
            <div
              key={logo.name}
              className={`transition-all duration-500 hover:scale-105 flex flex-col items-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + i * 0.1}s`, minWidth: 110 }}
            >
              {logo.name === "Observe Now" ? (
                <img src={logo.src} alt={logo.name} className="max-h-10 md:max-h-14 max-w-[100px] object-contain" />
              ) : (
                <img src={logo.src} alt={logo.name} className="max-h-14 md:max-h-20 max-w-[140px] object-contain" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
