import { useState } from "react";
import { Link, NavLink } from "react-router";
import { facebookUrl, instagramUrl, navItems } from "../../data/site";
import SocialIcon from "../icons/SocialIcon";
import VanIcon from "../icons/VanIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-[#071a3d]">
      <div className="h-8 px-5 text-[10px] font-semibold text-white/70"><div className="mx-auto flex h-full max-w-[1240px] items-center justify-between"><span><span className="sm:hidden">Fully insured</span><span className="hidden sm:inline">Fully insured Bristol man &amp; van service</span></span><a href="https://wa.me/447584201972" className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#e00016] px-3 py-1 font-bold text-white"><WhatsAppIcon /><span className="sm:hidden">WhatsApp</span><span className="hidden sm:inline">WhatsApp replies in minutes</span></a></div></div>
      <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between border-x border-t border-[#dfe4ec] bg-white px-4 text-[#071a3d] shadow-xl sm:rounded-t-2xl sm:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="RIT TRANZ home">
          <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-full border-2 border-white shadow-lg"><VanIcon /></span>
          <span className="leading-none"><strong className="block text-[18px] tracking-[0.14em]">RIT TRANZ</strong><small className="mt-1 block text-[9px] font-semibold tracking-[0.2em] text-[#697386]">MAN & VAN BRISTOL</small></span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex" aria-label="Main navigation">
          {navItems.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => isActive ? "text-[#ff5968]" : "transition hover:text-[#ff5968]"}>{label}</NavLink>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-1">
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Facebook" className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-[#f2f5fa] hover:text-[#e00016]"><SocialIcon network="facebook" /></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Instagram" className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-[#f2f5fa] hover:text-[#e00016]"><SocialIcon network="instagram" /></a>
          </div>
          <a href="tel:+447584201972" className="text-sm font-semibold">07584 201972</a>
          <Link to="/contact" className="rounded-full bg-[#e00016] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:bg-white hover:text-[#071a3d]">Get a free quote</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-[#dfe4ec] text-xl lg:hidden" aria-label="Toggle menu">{open ? "×" : "≡"}</button>
      </div>
      {open && <nav className="absolute inset-x-4 top-[102px] rounded-2xl bg-white p-5 text-[#071a3d] shadow-xl lg:hidden">{navItems.map(([label, path]) => <Link onClick={() => setOpen(false)} key={path} to={path} className="block border-b border-[#dfe4ec] py-3 text-sm font-semibold">{label}</Link>)}<div className="mt-4 flex gap-2"><a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-[#f2f5fa]"><SocialIcon network="facebook" /></a><a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-[#f2f5fa]"><SocialIcon network="instagram" /></a></div></nav>}
    </header>
  );
}
