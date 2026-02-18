import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "What We Cover", "Contact"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slide-down bg-[#f3f3f3] shadow-sm border-b border-white/20`}
      style={{ WebkitBackdropFilter: 'blur(16px)', backdropFilter: 'blur(16px)' }}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/data/observenow-logo.webp"
            alt="Observe Now Logo"
            className="w-11 h-11 md:w-12 md:h-12 object-contain rounded-lg"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative text-sm font-medium text-gray-700 transition-colors hover:text-primary group"
            >
              {link}
              <span
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex gradient-primary text-primary-foreground px-5 py-1.5 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 glow-hover"
        >
          Register Now
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card shadow-xl animate-fade-in">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileOpen(false)}
                className="text-foreground font-medium py-2"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="gradient-primary text-primary-foreground px-6 py-3 rounded-full text-center font-semibold"
            >
              Express Your Journey
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
