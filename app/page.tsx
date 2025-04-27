import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import FeaturesSection from "./components/FeaturesSection";
import CostCalculatorSection from "./components/CostCalculatorSection";
import ProjectGallery from "./components/ProjectGallery";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import ClientJourneySection from "./components/ClientJourneySection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ClientJourneySection />
      <FeaturesSection />
      <CostCalculatorSection />
      <ProjectGallery />
      <BlogSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
