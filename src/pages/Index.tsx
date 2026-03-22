import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import ServicesSection from "@/components/ServicesSection";
import ProtocolSection from "@/components/ProtocolSection";
import SafetySection from "@/components/SafetySection";
import StepsSection from "@/components/StepsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PrinciplesSection />
      <ServicesSection />
      <ProtocolSection />
      <SafetySection />
      <StepsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
