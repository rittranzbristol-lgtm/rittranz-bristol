import AboutHero from "../components/about/AboutHero";
import AboutReviews from "../components/about/AboutReviews";
import AboutStory from "../components/about/AboutStory";
import VanEquipment from "../components/about/VanEquipment";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Shell from "../components/layout/Shell";

export default function AboutPage() {
  return (
    <Shell>
      <AboutHero />
      <AboutStory />
      <WhyChooseUs />
      <VanEquipment />
      <AboutReviews />
    </Shell>
  );
}
