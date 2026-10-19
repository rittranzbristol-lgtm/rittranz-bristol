import { serviceAreas } from "../../data/services";

export default function ServiceAreas() {
  return (
    <section className="bg-[#071a3d] px-5 py-20 text-white sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[780px]">
          <p className="text-xs font-bold tracking-[0.18em] text-[#ff5968]">WHERE WE GO</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Local Roots. National Reach.</h2>
          <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">Operating across the heart of Bristol daily, our core van services cover every local BS postcode. But when you need to relocate further afield, Rit Tranz provides dedicated, direct-drive transport across the UK.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {serviceAreas.map((area, index) => (
            <article key={area.title} className="flex h-full flex-col rounded-[24px] border border-white/10 bg-white/[0.06] p-7 transition hover:-translate-y-1 hover:border-[#ff5968]/50 hover:bg-white/[0.09]">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[10px] font-bold tracking-[0.16em] text-[#ff5968]">{area.label}</p>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/10 text-xs font-bold text-white/70">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em]">{area.title}</h3>
              <p className="mt-4 min-h-24 text-sm leading-6 text-white/65">{area.text}</p>
              <div className="my-6 h-px bg-white/10" />
              <ul className="space-y-3">
                {area.locations.map((location) => (
                  <li key={location} className="flex items-start gap-3 text-sm font-semibold leading-6 text-white/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e00016]" />
                    {location}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/447584201972" target="_blank" rel="noreferrer" className="mt-auto pt-7 text-sm font-bold text-[#ff5968] transition hover:text-white">
                Message us for a custom quote →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
