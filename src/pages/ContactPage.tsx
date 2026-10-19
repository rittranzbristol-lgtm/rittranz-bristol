import ContactFormSection from "../components/contact/ContactFormSection";
import ContactMap from "../components/contact/ContactMap";
import ContactMethods from "../components/contact/ContactMethods";
import ProtectionCards from "../components/contact/ProtectionCards";
import QuoteChecklist from "../components/contact/QuoteChecklist";
import PageHero from "../components/layout/PageHero";
import Shell from "../components/layout/Shell";

export default function ContactPage() {
  return (
    <Shell>
    <PageHero eyebrow="GET A FREE QUOTE" title="Give us the route. We’ll work out the move." intro="Share the key details and continue on WhatsApp. Clear information helps us return a fast, accurate, no-obligation quote." />
      <ContactMethods />
      <ContactFormSection />
      <QuoteChecklist />
      <ProtectionCards />
      <ContactMap />
    </Shell>
  );
}
