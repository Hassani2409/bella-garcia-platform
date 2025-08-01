import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CelebritySection from "@/components/sections/CelebritySection";
import FilmCreditsSection from "@/components/sections/FilmCreditsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CelebritySection />
      <FilmCreditsSection />
    </>
  );
}
