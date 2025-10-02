import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FacilitiesSection from "@/components/home/FacilitiesSection";
import Explore from "@/components/home/Explore";
import TestimonialSection from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FacilitiesSection />
        <Explore />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
