import CoverageSection from "../components/home/CoverageSection";
import CtaBanner from "../components/home/CtaBanner";
import FaqSection from "../components/home/FaqSection";
import HeroSection from "../components/home/HeroSection";
import HomeFooter from "../components/home/HomeFooter";
import HomeHeader from "../components/home/HomeHeader";
import HowItWorksSection from "../components/home/HowItWorksSection";
import ReviewsSection from "../components/home/ReviewsSection";
import ServicesSection from "../components/home/ServicesSection";
import { homeFaqSchema, localBusinessSchema } from "../data/home";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6f8fc] text-[#071a3d]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <HomeHeader />

      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <CoverageSection />
        <ReviewsSection />
        <FaqSection />
        <CtaBanner />
      </main>

      <HomeFooter />
    </div>
  );
}
