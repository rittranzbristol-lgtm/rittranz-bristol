import WhatsAppIcon from "../icons/WhatsAppIcon";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#071a3d] text-white">
      <div className="page-hero-pattern absolute inset-0 opacity-20" />
      <div className="relative mx-auto grid min-h-[620px] max-w-[1440px] lg:grid-cols-2">
        <div className="flex items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-14 xl:pl-24 xl:pr-16">
          <div className="max-w-[650px]">
            <p className="text-xs font-bold tracking-[0.18em] text-[#ff5968]">LOCAL SERVICE, HANDLED PERSONALLY</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-7xl">About Rit Tranz</h1>
            <p className="mt-6 text-base leading-8 text-white/75 sm:text-lg">A Bristol-based man and van service built on reliability, honest prices, and care for every item—from a single sofa to a full student move.</p>
            <a href="https://wa.me/447584201972" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#e00016] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:bg-white hover:text-[#071a3d]"><WhatsAppIcon /> Get a quote on WhatsApp for a quick reply</a>
          </div>
        </div>
        <div className="relative min-h-[500px] overflow-hidden lg:min-h-[620px]">
          <img className="absolute inset-0 h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1769159511492-aa484c036c06?auto=format&fit=crop&w=1600&q=88" alt="Ford Transit Custom van with RIT TRANZ branding graphic" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020f2d]/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#071a3d]/25 lg:to-transparent" />
          <div className="absolute left-[17%] top-[35%] w-24 -rotate-2 rounded-xl border-2 border-white bg-white/95 p-1.5 shadow-2xl sm:w-28 lg:w-32">
            <img className="aspect-square w-full rounded-lg object-cover" src="/assets/rit-tranz-logo.png" alt="RIT TRANZ logo" />
          </div>
          <p className="absolute bottom-5 right-5 rounded-full bg-[#020f2d]/85 px-4 py-2 text-[10px] font-semibold text-white/75 backdrop-blur-md">Temporary branded visual</p>
        </div>
      </div>
    </section>
  );
}
