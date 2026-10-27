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
          {/* Phones get a portrait crop; tablets and desktops get the wider one. */}
          <picture>
            <source media="(max-width: 639px)" srcSet="/assets/about-hero-phone.jpg" />
            <img className="absolute inset-0 h-full w-full object-cover object-center" src="/assets/about-hero-desktop.jpg" alt="RIT TRANZ van beside Clifton Observatory, Bristol, at sunset" fetchPriority="high" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020f2d]/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#071a3d]/25 lg:to-transparent" />
        </div>
      </div>
    </section>
  );
}
