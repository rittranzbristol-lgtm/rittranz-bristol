import { services } from "../../data/home";
import Icon from "../icons/Icon";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#f2f5fa] px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-10 max-w-[850px]">
          <p className="eyebrow">WHAT RIT TRANZ DOES</p>
          <h2 className="section-title mt-4">Looking for a van in Bristol? Book the right van service when you need it.</h2>
          <p className="mt-5 max-w-[680px] text-base leading-7 text-[#465269]">Friendly local driver, fair pricing, and a straightforward service from start to finish.</p>
          <p className="mt-5 inline-flex rounded-xl border border-[#d7dee9] bg-white px-4 py-3 text-sm font-bold text-[#071a3d] shadow-sm">Every service includes a van, driver, and one trip up to 10 miles.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((item, index) => (
            // An odd last card spans both columns so it doesn't sit alone in its row.
            <a key={item.title} href="/services" aria-label={`${item.cta}: ${item.title}`} className={`group block rounded-[24px] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#e00016]/20 ${index === services.length - 1 && services.length % 2 === 1 ? "md:col-span-2" : ""}`}>
              <article className="service-card flex h-full flex-col rounded-[24px] border border-[#dfe4ec] bg-white p-7 transition duration-200 group-hover:-translate-y-1 group-hover:border-[#d10014]/30 group-hover:shadow-xl">
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-[#f2f5fa] text-[#d10014] transition group-hover:bg-[#e00016] group-hover:text-white"><Icon name={item.icon} size={23} /></span>
                <h3 className="text-2xl font-semibold tracking-[-0.025em]">{item.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-7 text-[#465269]">{item.description}</p>
                <div className="my-6 h-px bg-[#e1e6ee]" />
                <div className="flex items-end justify-between gap-5">
                  <div><span className="text-sm font-bold text-[#465269]">FROM</span><div><strong className="text-3xl tracking-[-0.04em]">{item.price}</strong>{item.unit === "/ hour" && <span className="text-sm font-semibold text-[#465269]"> / hour</span>}{item.priceExtra && <span className="ml-2 text-xs font-semibold text-[#d10014]">({item.priceExtra})</span>}</div></div>
                  <span className="text-right text-xs font-bold leading-5 text-[#344057] sm:whitespace-nowrap sm:text-sm">{item.note}</span>
                </div>
                {item.subtext && <p className="mt-3 text-sm font-semibold leading-6 text-[#d10014]">{item.subtext}</p>}
                <span className="mt-6 inline-flex items-center justify-between rounded-xl bg-[#071a3d] px-5 py-3.5 text-sm font-bold text-white transition group-hover:bg-[#e00016]">{item.cta}<Icon name="arrow" size={17} /></span>
              </article>
            </a>
          ))}
        </div>
        <div className="mt-7 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#071a3d] p-6 text-white md:flex-row md:items-center">
          <div>
            <p className="text-base font-bold">No hidden fees. Final price confirmed before booking.</p>
            <a href="/terms" className="mt-2 inline-flex text-sm font-semibold text-[#ff5968] underline decoration-[#ff5968]/40 underline-offset-4 transition hover:text-white">Customer loading assistance may be required</a>
          </div>
          <a href="https://wa.me/447584201972" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#e00016] px-6 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#071a3d]">Get a free quote on WhatsApp <Icon name="arrow" size={18} /></a>
        </div>
      </div>
    </section>
  );
}
