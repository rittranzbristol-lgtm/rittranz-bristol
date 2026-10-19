import PageHero from "../components/layout/PageHero";
import Shell from "../components/layout/Shell";

export default function PrivacyPage() {
  return (
    <Shell>
      <PageHero eyebrow="PRIVACY & COOKIES" title="How we handle your information." intro="A clear summary of the information RIT TRANZ receives when you request a quote or use this website." />
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[860px] space-y-8 rounded-[28px] border border-[#dfe4ec] bg-white p-7 shadow-lg shadow-[#071a3d]/5 sm:p-10">
          <div><h2 className="text-2xl font-semibold">Information you provide</h2><p className="mt-3 leading-7 text-[#465269]">When you request a quote, we may receive your name, telephone number, email address, collection and delivery details, item information, photos, and preferred moving date.</p></div>
          <div><h2 className="text-2xl font-semibold">How we use it</h2><p className="mt-3 leading-7 text-[#465269]">We use this information to respond to enquiries, prepare quotes, arrange and complete services, keep appropriate business records, and meet legal obligations.</p></div>
          <div><h2 className="text-2xl font-semibold">Cookies and external services</h2><p className="mt-3 leading-7 text-[#465269]">This website does not use advertising cookies. Links to WhatsApp, Google, Facebook, Instagram, and map services open third-party websites that operate under their own privacy and cookie policies.</p></div>
          <div><h2 className="text-2xl font-semibold">Your choices</h2><p className="mt-3 leading-7 text-[#465269]">You can ask what personal information we hold about you or request a correction or deletion where applicable. Contact RIT TRANZ at info@rittranz.co.uk or call +44 7584 201972.</p></div>
        </div>
      </section>
    </Shell>
  );
}
