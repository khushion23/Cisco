
import { Calendar, Clock, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { icon: Calendar, label: "Date", value: "20th February, 2026" },
  { icon: Clock, label: "Time", value: "6:00 PM Onwards" },
  { icon: MapPin, label: "Location", value: "Hyderabad" },
];

const EventInfoCard = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className="event-info-card mx-auto max-w-3xl">
      <div className="event-info-wrapper">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center gap-4 ${isVisible ? "opacity-100 animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="icon-box">
              <item.icon />
            </div>
            <div>
              <p className="label mb-0.5">{item.label}</p>
              <p className="value">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .event-info-card {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          padding: 16px 20px;
          margin-top: -40px;
          position: relative;
          z-index: 10;
        }
        .event-info-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 36px;
        }
        .icon-box {
          background: #6b0f3c;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon-box svg {
          width: 16px;
          height: 16px;
          color: #fff;
        }
        .label {
          font-size: 13px;
          font-weight: 500;
          color: #6b7280;
        }
        .value {
          font-size: 15px;
          font-weight: 600;
          color: #111827;
        }
        @media (max-width: 900px) {
          .event-info-wrapper {
            gap: 18px;
          }
          .event-info-card {
            padding: 12px 6px;
          }
        }
        @media (max-width: 600px) {
          .event-info-wrapper {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default EventInfoCard;
