import { useState } from "react";
import { facebookUrl, instagramUrl } from "../../data/site";
import Icon from "../icons/Icon";

export default function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 text-white">
      <div className="h-8 bg-[#071a3d] px-5 text-[10px] font-semibold text-white/70">
        <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between">
          <span><span className="sm:hidden">Fully insured</span><span className="hidden sm:inline">Fully insured Bristol man &amp; van service</span></span>
          <a href="https://wa.me/447584201972" className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#e00016] px-3 py-1 font-bold text-white"><Icon name="whatsapp" size={13} /><span className="sm:hidden">WhatsApp</span><span className="hidden sm:inline">WhatsApp replies in minutes</span></a>
        </div>
      </div>
      <div className="mx-auto mt-3 flex h-[74px] max-w-[1240px] items-center justify-between rounded-2xl border border-[#dfe4ec] bg-white px-4 text-[#071a3d] shadow-2xl sm:px-6">
        <a href="#" className="flex items-center gap-3" aria-label="RIT TRANZ home">
          <img className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-lg" src="/assets/rit-tranz-logo.png" alt="RIT TRANZ Bristol logo" />
          <span className="leading-none">
            <strong className="block text-[18px] tracking-[0.14em]">RIT TRANZ</strong>
            <small className="mt-1 block text-[9px] font-semibold tracking-[0.2em] text-[#697386]">MAN & VAN BRISTOL</small>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex" aria-label="Main navigation">
          <a className="text-[#e00016] transition" href="/">Home</a>
          <a className="transition hover:text-[#e00016]" href="/services">Services</a>
          <a className="transition hover:text-[#e00016]" href="/pricing">Pricing</a>
          <a className="transition hover:text-[#e00016]" href="/about">About</a>
          <a className="transition hover:text-[#e00016]" href="/contact">Contact</a>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-1">
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Facebook" className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-[#f2f5fa] hover:text-[#e00016]">
              <Icon name="facebook" size={18} />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Instagram" className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-[#f2f5fa] hover:text-[#e00016]">
              <Icon name="instagram" size={18} />
            </a>
          </div>
          <a href="tel:+447584201972" className="flex items-center gap-2 text-sm font-semibold">
            <Icon name="phone" size={17} /> 07584 201972
          </a>
          <a href="/contact" className="rounded-full bg-[#e00016] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/20 transition hover:bg-white hover:text-[#071a3d]">
            Get a free quote
          </a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-full border border-[#dfe4ec] lg:hidden" aria-label="Toggle menu">
          <Icon name={menuOpen ? "x" : "menu"} />
        </button>
      </div>
      {menuOpen && (
        <nav className="mx-4 mt-2 rounded-2xl bg-white p-5 text-[#071a3d] shadow-xl lg:hidden">
          {["Home", "Services", "Pricing", "About", "Contact"].map((item, index) => (
            <a key={item} onClick={() => setMenuOpen(false)} className="block border-b border-white/10 py-3 text-sm font-semibold" href={["/", "/services", "/pricing", "/about", "/contact"][index]}>
              {item}
            </a>
          ))}
          <div className="mt-4 flex items-center gap-2">
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-[#f2f5fa] text-[#071a3d]"><Icon name="facebook" size={19} /></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-[#f2f5fa] text-[#071a3d]"><Icon name="instagram" size={19} /></a>
          </div>
          <a href="/contact" onClick={() => setMenuOpen(false)} className="mt-4 block rounded-full bg-[#e00016] px-5 py-3 text-center text-sm font-bold text-white">Get a free quote</a>
        </nav>
      )}
    </header>
  );
}
