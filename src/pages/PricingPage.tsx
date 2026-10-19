import Shell from "../components/layout/Shell";
import PricingHero from "../components/pricing/PricingHero";
import PricingPlans from "../components/pricing/PricingPlans";

export default function PricingPage() {
  return (
    <Shell>
      <PricingHero />
      <PricingPlans />
    </Shell>
  );
}
