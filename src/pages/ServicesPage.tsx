import Shell from "../components/layout/Shell";
import ServiceAreas from "../components/services/ServiceAreas";
import ServiceFaqs from "../components/services/ServiceFaqs";
import ServiceList from "../components/services/ServiceList";
import ServicesHero from "../components/services/ServicesHero";
import { serviceFaqSchema } from "../data/services";

export default function ServicesPage() {
  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceFaqSchema) }} />
      <ServicesHero />
      <ServiceList />
      <ServiceAreas />
      <ServiceFaqs />
    </Shell>
  );
}
