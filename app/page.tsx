import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import ReferencesSection from "./components/ReferencesSection";
import ContactSection from "./components/ContactSection";
import ValuesSection from "./components/ValuesSection";
import ServiceAreasSection from "./components/ServiceAreasSection";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ValuesSection />
      <ServiceAreasSection />
      <TeamSection />
      <ReferencesSection />
      <ContactSection />
    </div>
  );
}
