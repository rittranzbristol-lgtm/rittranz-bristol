import ArrowIcon from "../icons/ArrowIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

export default function ContactMap() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-8"><p className="text-[10px] font-bold tracking-[0.18em] text-[#d10014]">LOCAL, READY, EASY TO REACH</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Established in Bristol. Ready to route your request.</h2></div>
        <div className="grid overflow-hidden rounded-[28px] border border-[#dfe4ec] bg-white shadow-lg shadow-[#071a3d]/5 lg:grid-cols-2">
          <div className="relative min-h-[400px] overflow-hidden bg-[#071a3d]">
            <img className="absolute inset-0 h-full w-full object-cover grayscale contrast-110" src="/assets/bristol-service-map.png" alt="Map of the RIT TRANZ service area across Bristol and North Somerset" />
            <div className="absolute inset-0 bg-[#071a3d]/55 mix-blend-multiply" />
            <div className="absolute left-[58%] top-[42%] grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white/70 bg-[#e00016] text-sm font-bold text-white shadow-2xl">RT</div>
            <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/20 bg-[#071a3d]/90 p-4 text-white shadow-xl backdrop-blur-md">
              <span className="text-xs font-bold">Bristol and all surrounding areas</span>
              <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer" className="text-[10px] font-medium text-white/60 transition hover:text-white">© OpenStreetMap contributors</a>
            </div>
          </div>
          <div className="bg-[#071a3d] p-8 text-white sm:p-10">
            <p className="text-[10px] font-bold tracking-[0.16em] text-[#ff5968]">NEED HELP FIRST?</p>
            <h2 className="mt-4 text-3xl font-semibold">Ask a service question.</h2>
            <p className="mt-4 text-sm leading-6 text-white/55">Not ready to request a quote? Tell us what you are considering and we will point you toward the right option.</p>
            <ul className="mt-6 space-y-3 text-sm text-white/75"><li>— Bristol and all BS postcodes</li><li>— Pill, Portishead and surrounding areas</li><li>— Local moves and wider UK transport</li></ul>
            <a href="https://wa.me/447584201972" className="mt-8 flex items-center justify-between rounded-xl bg-[#e00016] px-5 py-4 text-sm font-bold"><span className="flex items-center gap-3"><WhatsAppIcon /> WhatsApp for a quick answer</span><ArrowIcon /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
