import { coverage } from "../../data/home";
import Icon from "../icons/Icon";

export default function CoverageSection() {
  return (
    <section id="coverage" className="bg-[#f8f9fc] px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1240px] items-start gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow">LOCAL & RELIABLE</p>
          <h2 className="section-title mt-4">Proudly moving Bristol and beyond.</h2>
          <p className="mt-5 max-w-[570px] text-base leading-8 text-[#465269]">Based in Bristol, we know the streets, the shortcuts, and the parking spots. We cover all BS postcodes including Bristol City Centre, Clifton, Redland, Bedminster, Southville, Horfield, Kingswood, and Bradley Stoke. We also proudly serve North Somerset (Pill, Portishead, Clevedon, Nailsea) and offer nationwide UK moves by arrangement.</p>
        </div>
        <div className="map-card relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#071a3d] shadow-xl">
          <img className="absolute inset-0 h-full w-full object-cover grayscale contrast-110" src="/assets/bristol-service-map.png" alt="Map of Bristol, North Somerset, and surrounding service areas" />
          <div className="absolute inset-0 bg-[#071a3d]/55 mix-blend-multiply" />
          <div className="absolute left-[58%] top-[38%] grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white/70 bg-[#e00016] text-white shadow-2xl">
            <Icon name="truck" size={24} />
          </div>
          <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer" className="absolute right-3 top-3 rounded-full bg-[#071a3d]/80 px-3 py-1 text-[10px] font-semibold text-white/80 backdrop-blur-sm">© OpenStreetMap contributors</a>
          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-[#071a3d]/90 p-5 text-white shadow-2xl backdrop-blur-md">
            <div className="flex flex-wrap gap-2">
              {coverage.map((area) => <span key={area} className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold">{area}</span>)}
            </div>
            <a href="https://wa.me/447584201972" target="_blank" rel="noreferrer" className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-[#e00016] px-5 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#071a3d]">Get a quote for your area <Icon name="arrow" size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
