import { Phone, Mail, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GetInTouchSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-spacing bg-card" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className={`grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Left purple with video background */}
          <div className="relative gradient-primary p-10 text-primary-foreground flex flex-col justify-center overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
              src="/data/7592140-hd_1920_1080_25fps (1).mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">Get In Touch</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Experience excellence in every interaction. Reach out to our team for bespoke solutions and inquiries.
              </p>
            </div>
          </div>

          {/* Right contact + Zoho form */}
          <div className="bg-card p-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="icon-container shrink-0"><User size={20} /></div>
              <div>
                <p className="text-xs text-muted-foreground">Contact Person</p>
                <p className="font-semibold text-foreground">Abuzar Zaidi</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="icon-container shrink-0"><Phone size={20} /></div>
              <div>
                <p className="text-xs text-muted-foreground">Phone Number</p>
                <p className="font-semibold text-foreground">+91-9412878082</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="icon-container shrink-0"><Mail size={20} /></div>
              <div>
                <p className="text-xs text-muted-foreground">Email Address</p>
                <p className="font-semibold text-foreground">abuz@observenow.com</p>
              </div>
            </div>

            {/* ...removed Register button, event info, and social links... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
