import WhatsAppIcon from "../icons/WhatsAppIcon";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-[#071a3d] px-5 py-20 text-white sm:px-8 sm:py-28">
      <div className="page-hero-pattern absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1240px]">
        <div className="max-w-[850px]">
          <p className="text-xs font-bold tracking-[0.18em] text-[#ff5968]">SIMPLE PRICING</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-7xl">Fair prices. No last-minute surprises.</h1>
          <p className="mt-6 max-w-[760px] text-lg leading-8 text-white/75">Know what is included before your driver sets off. For an exact price, send your job details and RIT TRANZ will provide a clear, no-obligation quote. Direct driver-to-customer communication, no middlemen.</p>
          <a href="https://wa.me/447584201972" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#e00016] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:bg-white hover:text-[#071a3d]"><WhatsAppIcon /> Chat with your driver on WhatsApp.</a>
        </div>
        <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] sm:grid-cols-3">
          {["£2M Public Liability Insurance", "£15,000 Goods in Transit Cover", "Environment Agency Registered Upper Tier Waste Carrier"].map((credential) => (
            <div key={credential} className="flex items-center gap-3 border-b border-white/10 px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#e00016] text-sm font-bold text-white">✓</span>
              <span className="text-sm font-semibold leading-6 text-white">{credential}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
