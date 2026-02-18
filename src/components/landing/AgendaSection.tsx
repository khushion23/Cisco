import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const events = [
  { time: "6:10 – 6:40 PM", title: "Keynote by Team Computers" },
  { time: "6:40 – 7:20 PM", title: "NetApp Session" },
  { time: "7:20 – 7:35 PM", title: "Q&A Session" },
  { time: "7:35 – 7:40 PM", title: "Vote of Thanks" },
  { time: "7:40 PM Onwards", title: "Networking Dinner & Cocktails" },
];

const AgendaSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="agenda" className="section-spacing bg-card" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-14 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Agenda Snapshot
        </h2>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block">
            {isVisible && <div className="w-full bg-primary animate-grow-line" />}
          </div>
          {/* Mobile line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:hidden">
            {isVisible && <div className="w-full bg-primary animate-grow-line" />}
          </div>

          <div className="space-y-8 md:space-y-12">
            {events.map((ev, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-start ${isVisible ? (i % 2 === 0 ? "animate-fade-left" : "animate-fade-right") : "opacity-0"}`}
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3.5 h-3.5 rounded-full gradient-primary -translate-x-1/2 top-4 z-10 border-2 border-card" />

                  {/* Mobile layout */}
                  <div className="ml-14 md:hidden bg-card rounded-xl border border-border p-5 shadow-sm w-full">
                    <p className="text-sm font-bold text-primary mb-1">{ev.time}</p>
                    <p className="font-medium text-foreground">{ev.title}</p>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-2 w-full gap-8">
                    {isLeft ? (
                      <>
                        <div className="text-right pr-8">
                          <div className="bg-card rounded-xl border border-border p-5 shadow-sm inline-block card-lift">
                            <p className="text-sm font-bold text-primary mb-1">{ev.time}</p>
                            <p className="font-medium text-foreground">{ev.title}</p>
                          </div>
                        </div>
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <div className="pl-8">
                          <div className="bg-card rounded-xl border border-border p-5 shadow-sm inline-block card-lift">
                            <p className="text-sm font-bold text-primary mb-1">{ev.time}</p>
                            <p className="font-medium text-foreground">{ev.title}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
