import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import about1 from "@/assets/about-1.png";
import about2 from "@/assets/about-2.png";
import about3 from "@/assets/about-3.png";
import about4 from "@/assets/about-4.png";

const extraImages = [
  "/data/62f66f8af16a0d0018e648c6.webp",
  "/data/231257971.jpg",
  "/data/office.jpg",
  "/data/premium_photo-1683120730432-b5ea74bd9047%20(1).avif",
  "/data/Working-in-an-open-office-1024x576-1.png"
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="bg-gradient-to-br from-white via-[#f8fafc] to-[#f3e8ff] py-6 px-2" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-4xl font-semibold text-gray-900 mb-5 text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          About <span className="font-semibold" style={{ color: '#6b0f3c' }}>FutureVerse</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Left text */}
          <div className={`space-y-4 text-gray-600 text-[15px] leading-relaxed ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <p>
              We, in collaboration with Team Computers, NetApp, and Cisco, are pleased to invite you to an exclusive leadership evening titled <b>"FutureVerse — Powering Tomorrow's AI-Ready Infrastructure"</b>, scheduled for Friday, <b>20th February, 2026</b>.
            </p>
            <p>
              This closed-door gathering is thoughtfully curated for 30+ senior IT and technology leaders focused on building AI-enabled, future-ready enterprises. The session provides a peer-driven platform to explore how unified, intelligent infrastructure and modern data platforms are powering AI workloads, accelerating innovation, and strengthening enterprise resilience.
            </p>
          </div>

          {/* Quote card */}
          <div
            className={`about-quote-card flex items-start max-w-[520px] w-full p-6 h-auto bg-white rounded-2xl border border-blue-100 shadow-lg shadow-blue-100/40 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-4xl font-bold text-black mb-2 mr-4">“</span>
            <span className="text-lg italic font-medium text-gray-800 leading-relaxed mt-1">
              Powering AI-ready enterprises through intelligent data foundations.”
            </span>
          </div>
        </div>

        {/* Infinite carousel image grid */}
        <div className="relative w-full overflow-x-hidden mt-8">
          <div className="carousel-track flex items-center gap-6 animate-carousel-scroll">
            {[
              about1, about2, about3, about4,
              ...extraImages,
              about1, about2, about3, about4,
              ...extraImages
            ].map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden min-w-[140px] max-w-[180px] h-32 shadow-md hover:shadow-xl transition duration-300 flex-shrink-0"
              >
                <img src={typeof img === 'string' ? img : img} alt={`Event photo ${i + 1}`} className="w-full h-32 object-cover rounded-2xl" />
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes carousel-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .carousel-track {
              width: 200%;
              animation: carousel-scroll 32s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
