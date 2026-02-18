import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import connectBg from "@/assets/connect-bg.png";

const ContactFormSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Designation: "",
    Organization: "",
    City: ""
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-20 md:py-28" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src={connectBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="relative z-10 container mx-auto px-2 max-w-md">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          Let's Connect
        </h2>

        <div className={`glass-card rounded-2xl p-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8">
              <CheckCircle2 className="text-green-500 mb-2" size={48} />
              <div className="text-green-600 font-semibold text-lg">Submitted</div>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={async e => {
                e.preventDefault();
                const data = new URLSearchParams({
                  "Name": form.Name,
                  "Email": form.Email,
                  "Mobile": form.Mobile,
                  "Designation": form.Designation,
                  "Organisation": form.Organization,
                  "City": form.City
                });
                try {
                  const response = await fetch('https://forms.zohopublic.in/observenow/form/ConnectedIntelligenceWhereAIMeetsSecureHybridMulti/formperma/-bk2JPYM_0cyr7A4cTKfd8xuCz7kehLjiimbPbrI0G0', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: data.toString(),
                    mode: 'no-cors',
                  });
                  setSubmitted(true);
                } catch (err) {
                  alert('Submission failed. Please try again.');
                }
              }}
            >
              {["Name", "Email", "Mobile", "Designation", "Organization", "City"].map((field) => (
                <input
                  key={field}
                  type={field === "Email" ? "email" : "text"}
                  placeholder={`${field} *`}
                  value={form[field] || ""}
                  onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                  required
                />
              ))}

              <label className="flex items-start gap-3 cursor-pointer mt-4">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  className="mt-1 accent-primary"
                  required
                />
                <span className="text-primary-foreground/70 text-sm">
                  I agree to the{" "}
                  <a href="#" className="underline text-primary-foreground">Terms & Conditions</a> &{" "}
                  <a href="#" className="underline text-primary-foreground">Privacy Policy</a>.
                </span>
              </label>

              <button
                type="submit"
                className="w-full gradient-primary text-primary-foreground py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] glow-hover mt-4"
                disabled={!agreed}
              >
                Connect With Us
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
