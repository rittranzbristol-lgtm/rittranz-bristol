import ArrowIcon from "../icons/ArrowIcon";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#071a3d] text-white">
      <div className="page-hero-pattern absolute inset-0 opacity-20" />
      <div className="relative mx-auto grid min-h-[650px] max-w-[1440px] lg:grid-cols-2">
        <div className="flex items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-14 xl:pl-24 xl:pr-16">
          <div className="max-w-[650px]">
            <p className="text-xs font-bold tracking-[0.18em] text-[#ff5968]">OUR SERVICES</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-7xl">A van for every kind of job.</h1>
            <p className="mt-6 text-base leading-8 text-white/75 sm:text-lg">Professional van transport service covering flat and home moving, marketplace pickups, self-storage transport, and licensed waste clearance throughout Bristol. No call centres—deal straight with your dedicated driver.</p>
            <a href="https://wa.me/447584201972" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#e00016] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:bg-white hover:text-[#071a3d]">Message us for a fast quote <ArrowIcon /></a>
            <p className="mt-5 text-sm font-semibold leading-6 text-white/80">Fully insured · Licensed waste carrier · Direct driver, no middlemen.</p>
          </div>
        </div>
        <div className="relative min-h-[540px] overflow-hidden lg:min-h-[650px]">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="/assets/bristol-van-wills-memorial.jpg"
            alt="RIT TRANZ Ford Transit Custom van near the Wills Memorial Building, Bristol"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020f2d]/45 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#071a3d]/25 lg:to-transparent" />
          <div className="absolute bottom-7 left-5 right-5 sm:bottom-9 sm:left-8 sm:right-auto sm:w-[390px]">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-white/15 bg-[#e00016]" />
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-[#102d5f]" />
            <div className="relative rounded-2xl border border-white/15 bg-[#020f2d]/95 p-6 shadow-2xl backdrop-blur-md">
              <p className="text-[10px] font-bold tracking-[0.18em] text-[#ff5968]">PROTECTION BUILT IN</p>
              <ul className="mt-4 space-y-3">
                {["£2M Public Liability Insurance", "£15,000 Goods in Transit Cover", "EA Registered Upper Tier Waste Carrier"].map((credential) => (
                  <li key={credential} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#e00016] text-xs text-white">✓</span>
                    {credential}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
