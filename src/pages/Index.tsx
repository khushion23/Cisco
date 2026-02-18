import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import EventInfoCard from "@/components/landing/EventInfoCard";
import AboutSection from "@/components/landing/AboutSection";
import WhyAttendSection from "@/components/landing/WhyAttendSection";
import AgendaSection from "@/components/landing/AgendaSection";
import CollaborationSection from "@/components/landing/CollaborationSection";
import ContactFormSection from "@/components/landing/ContactFormSection";
import GetInTouchSection from "@/components/landing/GetInTouchSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <EventInfoCard />
      <AboutSection />
      <WhyAttendSection />
      <AgendaSection />
      <CollaborationSection />
      <ContactFormSection />
      <GetInTouchSection />
      <Footer />
    </div>
  );
};

export default Index;
