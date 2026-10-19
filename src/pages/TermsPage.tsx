import PageHero from "../components/layout/PageHero";
import Shell from "../components/layout/Shell";

export default function TermsPage() {
  return (
    <Shell>
      <PageHero eyebrow="SERVICE TERMS" title="Clear expectations before we get moving." intro="A straightforward summary of loading assistance, pricing, access, and service responsibilities." />
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[860px] rounded-[28px] border border-[#dfe4ec] bg-white p-7 shadow-lg shadow-[#071a3d]/5 sm:p-10">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">Customer loading assistance</h2>
          <p className="mt-4 leading-7 text-[#465269]">RIT TRANZ operates as a solo-driver service. For heavy, bulky, or awkward items, an able adult may need to help with loading and unloading unless additional labour has been agreed before booking.</p>
          <div className="my-8 h-px bg-[#dfe4ec]" />
          <div className="grid gap-8 sm:grid-cols-2">
            <div><h3 className="text-xl font-semibold">Pricing and mileage</h3><p className="mt-3 text-sm leading-6 text-[#465269]">Your final price is confirmed before booking. Extra mileage, additional trips, waiting time, parking costs, and tip or weighbridge fees are quoted separately where applicable.</p></div>
            <div><h3 className="text-xl font-semibold">Access and item details</h3><p className="mt-3 text-sm leading-6 text-[#465269]">Customers should disclose stairs, lifts, restricted parking, unusually heavy items, and access limitations before the job so the correct time and support can be arranged.</p></div>
            <div><h3 className="text-xl font-semibold">Waste clearance</h3><p className="mt-3 text-sm leading-6 text-[#465269]">Clearance prices depend on volume, weight, material type, and disposal charges. Restricted or hazardous waste must be declared before collection.</p></div>
            <div><h3 className="text-xl font-semibold">Changes and cancellations</h3><p className="mt-3 text-sm leading-6 text-[#465269]">Please tell us as soon as possible if the route, item list, access, or date changes. A revised quote may be required where the agreed job changes.</p></div>
          </div>
          <p className="mt-8 rounded-2xl bg-[#f2f5fa] p-5 text-sm leading-6 text-[#465269]">For the full terms that apply to your booking, ask RIT TRANZ when confirming your quote on WhatsApp.</p>
        </div>
      </section>
    </Shell>
  );
}
