import ContactSection from "@/components/contact-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PricingSection from "@/components/pricing-section";
import ServicesSection from "@/components/services-section";
import SolutionSection from "@/components/solution-section";
import TestimonialsSection from "@/components/testimonials-section";
import ProjectsSection from "@/components/projects-section";
import WhySection from "@/components/why-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SolutionSection />
        <ServicesSection />
        <WhySection />
        <ProjectsSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
