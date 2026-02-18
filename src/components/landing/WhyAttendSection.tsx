import { Database, HardDrive, Layers, Settings, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Database, title: "Unified Data for AI", desc: "Discover unified data storage powering AI workloads, data-driven infrastructure." },
  { icon: HardDrive, title: "Modernizing Storage", desc: "Learn best practices for modernizing storage to support AI analytics and direct workloads." },
  { icon: Layers, title: "Scalable Foundations", desc: "Gain insights on building scalable systems and future-ready data foundations." },
  { icon: Settings, title: "Simplify Management", desc: "Implement next-gen approaches to unify data operations with a purpose-built approach." },
  { icon: TrendingUp, title: "Business Value", desc: "Engage with pure-play experts on driving ROI for AI-focused AI-ready enterprises." },
];

const WhyAttendSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="what-we-cover" className="bg-gradient-to-br from-white via-[#f8fafc] to-[#f3e8ff] py-10 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-4xl font-semibold text-gray-900 mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Why Attend <span className="font-semibold" style={{ color: '#6b0f3c' }}>FutureVerse</span>?
        </h2>
        <p className={`text-gray-500 text-sm mb-12 text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          Join a curated group of leaders from tech's true power belt of your enterprise data infrastructure.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.slice(0, 3).map((f, i) => (
            <div
              key={f.title}
              className={`bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-2xl p-4 text-center transition duration-300 transform hover:-translate-y-2 hover:scale-105 group ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="text-white w-10 h-10 flex items-center justify-center rounded-lg mx-auto mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110" style={{ background: '#6b0f3c' }}>
                <f.icon size={20} className="transition-transform duration-300 group-hover:rotate-[8deg]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {features.slice(3).map((f, i) => (
            <div
              key={f.title}
              className={`bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-2xl p-4 text-center transition duration-300 transform hover:-translate-y-2 hover:scale-105 group ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.45 + i * 0.1}s` }}
            >
              <div className="text-white w-10 h-10 flex items-center justify-center rounded-lg mx-auto mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110" style={{ background: '#6b0f3c' }}>
                <f.icon size={20} className="transition-transform duration-300 group-hover:rotate-[8deg]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
