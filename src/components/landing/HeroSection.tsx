

import heroBg from "@/assets/hero-bg.png";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#a78bfa] via-[#f3e8ff] to-[#a5b4fc]"
      style={{ scrollBehavior: 'smooth' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/assets/hero-bg.png" alt="" className="w-full h-full object-cover float-bg soft-purple-shadow" />
        {/* Overlay darkness fix */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Radial gradient overlay for center focus */}
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 50% 45%, rgba(168,139,250,0.22) 0%, rgba(255,255,255,0.08) 45%, rgba(0,0,0,0.10) 80%, transparent 100%)'}} />
        {/* Vignette effect */}
        <div className="vignette-overlay" />
        {/* Grain/noise overlay */}
        <div className="grain-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 pb-16 animate-fade-up" style={{animationDelay: '0.1s'}}>
        {/* Badge */}
        <div
          className="event-badge mb-10 mt-8 animate-scale-in"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#fff',
            color: '#111827',
            padding: '8px 18px',
            borderRadius: 999,
            fontSize: 14,
            fontWeight: 600,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
          }}
        >
          <Sparkles size={16} color="#6b0f3c" />
          <span>Tech Leaders Conference</span>
          <Sparkles size={16} color="#6b0f3c" />
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-bold text-primary-foreground mb-7 tracking-normal opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s", letterSpacing: '-0.01em' }}
        >
          <span className="font-bold">Future</span>
          <span className="font-bold" style={{ color: '#f1e6ec' }}>Verse</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium mb-5 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s", letterSpacing: '-0.01em' }}
        >
          Powering Tomorrow's AI-Ready Infrastructure
        </p>

        {/* Description */}
        <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up leading-relaxed"
          style={{ animationDelay: "0.5s", letterSpacing: '-0.01em' }}
        >
          Exclusive invite-only evening for senior IT leaders building AI-enabled enterprises.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#contact"
            className="register-btn w-full sm:w-auto text-center transition-all duration-200 hover:bg-[#6b0f3c] hover:text-white hover:shadow-lg"
            style={{background: '#f3f4f6', color: '#6b0f3c', border: 'none', padding: '12px 26px', borderRadius: '10px', fontWeight: 600}}
          >
            Register Now
          </a>
          <a
            href="#agenda"
            className="agenda-btn w-full sm:w-auto text-center transition-all duration-200 hover:bg-white hover:text-[#6b0f3c] hover:shadow-lg"
            style={{background: 'transparent', color: '#fff', border: '1px solid #fff', padding: '12px 26px', borderRadius: '10px'}}
          >
            View Agenda
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
